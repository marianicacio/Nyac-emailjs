(function () {
        emailjs.init({
            publicKey: "go_2-FWamsEeI4gr2",
        })
    })();

    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault()

        emailjs.sendForm("service_s69h4or", "template_5c60fx8", this)
        .then(
            function() {
                console.log("success!")
                alert("Email enviado com sucesso")
            }
        ), function(err) {
            console.log("Fail", err)
            alert("Falha ao emviar o email, tente mais tarde!")          
        }
    })