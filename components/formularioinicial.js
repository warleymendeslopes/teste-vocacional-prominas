export default function forms() {
  return (

    <div class="content-formulario">
        <h1>Descubra qual Pós-Graduação fazer!</h1>
        <span>Faça o nosso teste vocacional e descubra qual curso se encaixa melhor no seu perfil</span>
        <form name="contact" method="POST" data-netlify="true">
            <div class="input_label">
                <input type="text" required placeholder="Digite seu nome completo."></input>
                <input type="email" required placeholder="Digite seu melhor e-mail."></input>
                <input type="text" required placeholder="Digite seu telefone."></input>
            </div>
            <button id="button" type="submit">Começar o teste!</button>        
        </form>
    </div>

  )
}