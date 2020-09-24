module.exports = {
    contato(obj) {
        return (
            `
                <div style="margin: 0; padding: 24px; background-color: #171717; border-radius: 24px;">
                    <img src="https://i.ibb.co/qmgGpNW/logo.png" alt="Logo" />
                    <h1 style="margin: 18px 0 18px 0; color: #FFFFFF;">Um novo contato respondeu ao formulário do site!</h1>
                    <hr/>
                    <p style="margin: 22px 0 8px 0; color: #E3C94F; font-size: 18px;">Nome: <b style="color: #FFFFFF;">${obj.nome}</b></p>
                    <p style="margin: 8px 0; color: #E3C94F; font-size: 18px;">Email para retorno: <a href="mailto: ${obj.email}" style="color: #FFFFFF;">${obj.email}</a></p>
                    <p style="margin: 8px 0; color: #E3C94F; font-size: 18px;">Assunto: <b style="color: #FFFFFF;">${obj.assunto}</b></p>
                    <p style="margin: 8px 0; color: #E3C94F; font-size: 18px;">Mensagem:</p>
                    <b style="font-size: 14px; color: #FFFFFF;">${obj.mensagem}</b>
                </div>
            `
        );
    }
};