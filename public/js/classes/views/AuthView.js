export class AuthView {

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = ` 
            <div class="auth"> 
                <form>
                    <div class="form__header">
                        <img src="/public/assets/images/logos/employIn.png"/>
                        <p>Log in to your account</p>
                    </div>
                     <div class="form__body">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="René"/>
                        </div>
                            <div class="form-group">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="123Soleil"/>
                        </div>
                            <div class="form-group">
                            <label>Magic word</label>
                            <input type="text" name="magicWord" placeholder="magicWord"/>
                        </div>
                    </div>
                    <div class="form__footer">
                        <button class="btn">Log in</button>
                        <p>Don't have an account? Sign up</p>
                    </div>
                </form>

               
            </div>
            `;
        }
    }
} 