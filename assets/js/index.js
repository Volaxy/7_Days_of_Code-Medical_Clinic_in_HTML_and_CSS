(function(){
    // Open and Close Menu
    let $newAppointmentButton = document.querySelector("[data-element-id='new-appointment-button']");
    let $newAppointmentBackground = document.querySelector("[data-element-id='new-appointment-background']");
    let $newAppointmentAppointmentsAnimations = document.querySelectorAll("[data-element-id='new-appointment__appointment--animation']");

    $newAppointmentButton.addEventListener("click", () => {
        $newAppointmentBackground.classList.toggle("new-appointment-background--active");

        $newAppointmentAppointmentsAnimations.forEach($appointment => {
            $appointment.classList.toggle("new-appointment__appointment--animated");
        });
    });
    
    window.addEventListener("click", event => {
        if(!event.composedPath().includes($newAppointmentButton)) {
            $newAppointmentBackground.classList.remove("new-appointment-background--active");
            
            $newAppointmentAppointmentsAnimations.forEach($appointment => {
                $appointment.classList.remove("new-appointment__appointment--animated");
            });
        }
    });
}());