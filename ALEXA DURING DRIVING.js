var publicConfig = {
    key:'',//insert key here
    stagger_time: 100,
    encode_polylines: false,
    proxy:''//optional for HTML request
};

var gmAPI = new GoogleMapsAPI(publicConfig);

function onSessionStarted(sessionStartedRequest, session) {
    logger.debug('onSessionStarted requestId=' + sessionStartedRequest.requestId + ', sessionId=' + session.sessionId);
    // add any session init logic here
    
}

function onSessionEnded(sessionEndedRequest, session) {
  logger.debug('onSessionEnded requestId=' + sessionEndedRequest.requestId + ', sessionId=' + session.sessionId);
  // Add any cleanup logic here
  
}

function onLaunch(launchRequest, session, response) {
  logger.debug('onLaunch requestId=' + launchRequest.requestId + ', sessionId=' + session.sessionId);
  response.speechText = 'Welcome to Driving Skill. You can ask question like what is the distance between two cities.';
  response.repromptText = 'For example you can ask what is the distance between New York City and Albany';
  response.shouldEndSession = false;
  response.done();
}

intentHandlers['GetDistance'] = function(request,session,response,slots){
  
  console.log("Get distance opned");
    if(slots.start !=undefined && slots.finish != undefined){
     
      
      var start = slots.start;
      var finish = slots.finish;
      
    if(start ==undefined || finish ==undefined){
        response.speechText ='Please set a start point and an end point';
        response.shouldEndSession = true;
        response.done();
    }
    else{
        console.log(`${start}-->${finish}`);
        var params = {
            origins: start,
            destinations: finish,
            units: 'imperial'
        };
        
        gmAPI.distance(params,function(err,result){
            console.log("err: "+err);
            console.log("result: "+result);
            console.log("the result is fine: "+result.status);
            
            var arry = result.rows[0].elements;
            
            if(arry[0].distance==undefined || arry[0].duration==undefined){
                response.speechText = ' I am sorry,  Distance could not be found';
                response.shouldEndSession = true;
                response.done();
            }else{
                console.log("distance is: "+arry[0].distance.text);
                console.log("distance is: "+arry[0].duration.text);
                
                var totalResult = `The distance from ${params.origins} to ${params.destinations} is ${arry[0].distance.text} and it will take apporximately ${arry[0].duration.text}`;//To be used in speech text
                response.speechText = totalResult;
                response.cardTitle = "Driving Skill";
                response.cardContent = totalResult;

                response.shouldEndSession = true;
                response.done();
            }
        
        });
    }

}else if((start == undefined && finish != undefined) || (start != undefined && finish == undefined)){
    console.log('one of the citi  es is not right');
    response.speechText = 'One of the city is not right please try again';
    response.repromptText = 'For example try New York, Troy etcetra';
    response.shouldEndSession = false;
    }
else if(start == "help" || finish == "help"){
    console.log("Help if ");
    response.speechText = "Help me";
    response.shouldEndSession = true;
    }
    else{
        response.speechText = 'Welcome to Driving Skill. You can ask question like what is the distance between teo cities.';
        response.repromptText = 'For example you can ask what is the distance between New York City and Albany';
        response.shouldEndSession = false;
        response.done();
    }   
}

intentHandlers['AMAZON.StopIntent'] = function(response){
  response.speechText = 'Good Bye have a safe trip';
  response.shouldEndSession = true;
}

intentHandlers['AMAZON.HelpIntent'] = function(response){
  response.speechText = 'You can choose to see the distance between any US cities';
  response.repromptText = 'You can say what is the distanc between Albany and New York';
}

