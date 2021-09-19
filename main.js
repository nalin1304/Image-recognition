//https://teachablemachine.withgoogle.com/models/HRiriLoI_/
Webcam.set({
    width: 350, 
    height: 300,
    image_format: 'png',
 png_quality : 100

}) ;
Webcam.attach("#Camera");
function capture(){
Webcam.snap(function(data_url){
document.getElementById("snapshot").innerHTML= "<img height='280'width = '350' src="+data_url+" id='image'>"
})
}
console.log("ml5 version is ",ml5.version) ;
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HRiriLoI_/model.json',modelloader);
function modelloader(){
    console.log("Model is loaded") ;

}
function check() {
img= document.getElementById("image");
classifier.classify(img,got_result);
console.log(got_result) ;
}
function got_result(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results) ;
        document.getElementById("object").innerHTML=results[0].label ;
        document.getElementById("Accuracy").innerHTML=100*(results[0].confidence.toFixed()  )+" %";
    
    }

}
