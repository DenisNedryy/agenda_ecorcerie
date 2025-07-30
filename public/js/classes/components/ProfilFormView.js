export class ProfilFormView {


    renderName() {
        const el = document.querySelector(".profil_form");
        if (el) {
            el.classList.add("box");
            el.innerHTML = `
            <p>Update Name</p>
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
            <label>Update Password</label>
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
            <label>Update Role</label>
            <div class="form-group">
              <label>Role</label>
            <input type="text" name="role"/>
            </div>
            <button class="btn btn-profil-role">Submit</div>
            </form>
            `;
        }
    }

    renderAddBirthday() {
        const el = document.querySelector(".profil_form");
        if (el) {
            el.classList.add("box");
            el.innerHTML = `
            <form>
          <label>Birthday</label>
          <div class="form-group">
            <label>Name:</label>
            <input type="text" name="name"/>
          </div>
          <div class="form-group">
            <label>Last name:</label>
            <input type="text" name="lastName"/> 
          </div>
          <div class="birthdayInputsContainer">
            <input type="text" class="date" id="day" name="birthDay-date" maxlength="2" placeholder="DD" inputmode="numeric" />
             <input type="text" class="date" id="month" name="birthDay-month" maxlength="2" placeholder="MM" inputmode="numeric" />
            <input type="text" class="date" id="year" name="birthDay-year" maxlength="4" placeholder="YYYY" inputmode="numeric" />
          </div>
             <button class="btn btn-profil-birthDay-add">Submit</div>
            </form>
            `;
        }
    }
}