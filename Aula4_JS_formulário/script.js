document.addEventListener("DOMContentLoaded", function () {

	const form = document.querySelector(".form-container form");
	const statusMensagem = document.querySelector("#msg-status");

	if (form && statusMensagem) {
		form.addEventListener('submit', (event) => {
            event.preventDefault();	
            const nome = form.querySelector('#nome').value.trim();
            const email= form.querySelector('#email').value.trim();
            const mensagem= form.querySelector('#mensagem').value.trim();
            
            if (nome== '' || email== '' || mensagem == '') {
                statusMensagem.innerHTML = '<p class="erro">Por favor, preencha todos os campos</p>';
                statusMensagem.className= 'status-erro';
            } else {
                statusMensagem.innerHTML = '<p class="sucesso">Formulário enviado com sucesso!</p>';
                statusMensagem.className= 'status-sucesso';
                form.reset()
                return;
            }
        })
    }
})

