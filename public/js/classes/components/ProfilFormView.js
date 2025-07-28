export class ProfilFormView {


    renderName() {
        const el = document.querySelector(".profil_form");
        if (el) {
            el.classList.add("box");
            el.innerHTML = `
            <form>
            <div class="form-group">
              <label>Name</label>
            <input type="text" name="name"/> 
            </div>
            <button class="btn btn-profil-name">Submit</div>
            </form>
            `; 
        }
    }

    renderPassword() {
        const el = document.querySelector(".profil_form");
        if (el) {
            el.classList.add("box");
            el.innerHTML = `
            <form>
            <div class="form-group">
                <label>Old password</label>
                <input type="password" name="password-old"/>
            </div>
            <div class="form-group">
                 <label>New password</label>
                 <input type="password" name="password-new"/>
            </div>
            <div class="form-group">
                 <label>Confirm new password</label>
                 <input type="password" name="password-confirmation"/>
            </div>
            <button class="btn btn-profil-password">Submit</div>
            </form>
            `;
        }
    }

    renderRole() {
        const el = document.querySelector(".profil_form");
        if (el) {
            el.classList.add("box");
            el.innerHTML = `
            <form>
            <div class="form-group">
              <label>Role</label>
            <input type="text" name="role"/>
            </div>
            <button class="btn btn-profil-role">Submit</div>
            </form>
            `;
        }
    }
}