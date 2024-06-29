    emailjs.init({
        publicKey: "go_2-FWamsEeI4gr2"
    })

    function handleEmail() {
        let templateParams = {
            name: "Destinatário",
            user_email: "darlysonrobson098@gmail.com",
            from_name: "Newspaper",
            message: "Conteúdo de mensagem aqui..."
        }

        emailjs.send("service_s69h4or", "template_i5oppgm", templateParams)
        .then(function(response) {
            console.log("Email enviado com sucesso!", response.status, response.text)
        }), function(error) {
            console.error("Erro ao enviar o email", error)
        }
    }