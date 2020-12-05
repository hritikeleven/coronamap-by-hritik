
function updatemap()
{   
    console.log("UPDATING DATA ")
    fetch("https://dazzling-jennings-9e9792.netlify.app/data.json")
    .then(response => response.json())
    .then(rsp => {
        //console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;

            if (cases<200) {
                //  block of code to be executed if condition1 is true
                color="#63a143"
                //green color
              } else if (cases<500) {
                //  block of code to be executed if the condition1 is false and condition2 is true
                color="#e85d04"
                //orange color
              } else if (cases<1000){
                //  block of code to be executed if the condition1 is false and condition2 is false
                color="#dc2f02"
                //dark orange 
              } else if (cases<1500){
                //  block of code to be executed if the condition1 is false and condition2 is false
                color ="#9d0208"
              } else {
                //  block of code to be executed if the condition1 is false and condition2 is false
                color="#dc2f02"
              }

            //marker
            new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}


updatemap();
