exports.handler = function(event,context) {

var request = event.request;    

if(request.type ==="LaunchRequest")
{


} else if(request.type === "IndentRequest"){


} else if(request.type === "SessionEndRequest"){


} else {

    context.fail("unknown intent type");
}

}
function buildResponse(Options)
{
    var response ={
        version: "1.0",
        response: {
        outputSpeech: {
            type: "SSML",
            ssml: "<speak>"+options.speechText+"</speak>"
        },
        shouldEndSession: options.endSession
        }
    };
}