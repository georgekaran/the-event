class MailTemplate {
    static SUBSCRIPTION() {
        return { title: "Events - Inscrição", 
                body: "<p>Você se inscreveu no evento ...</p>" }
    }
    static UNSUBSCRIPTION() {
        return { title: "Events - Cancelamento de inscrição", 
                body: "<p>Você cancelou a participação no evento {{ title }}...</p>" }
    }
    static ATTENDANCE() {
        return { title: "Events - Confirmação de presença", 
        body: "<p>Você compareceu ao evento {{ title }}...</p>" }
    }
    static CERTIFICATE_ISSUE() {
        return { title: "Events - Geração de certificado", 
        body: "<p>Você gerou um certificado do evento {{ title }}...</p>" }
    }
}

module.exports = MailTemplate;