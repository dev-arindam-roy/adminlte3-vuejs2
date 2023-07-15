<template>
    <div id="signinViewBox">
        <div class="register-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <router-link :to="{path: '/'}" class="h1"><b>ONEX</b>CRM</router-link>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">SignIn</p>
                    <form name="signin_frm" id="signinFrm" v-on:submit.prevent="submitSigninFormData">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-check">
                                        <input type="radio" id="signinOptionEmail" class="form-check-input" v-model="formData.signinOption" value="withEmail" />
                                        <label for="signinOptionEmail" class="form-check-label text-sm">Email</label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-check">
                                        <input type="radio" id="signinOptionMobile" class="form-check-input" v-model="formData.signinOption" value="withMobile" />
                                        <label for="signinOptionMobile" class="form-check-label text-sm">Mobile</label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-check">
                                        <input type="radio" id="signinOptionUsername" class="form-check-input" v-model="formData.signinOption" value="withUsername" />
                                        <label for="signinOptionUsername" class="form-check-label text-sm">Username</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" class="form-control" id="userNameEmail" v-model.trim="formData.usernameEmail" maxlength="60" placeholder="Email/Mobile/User Name">
                                <div class="input-group-append">
                                    <div class="input-group-text"><span class="fas fa-user"></span></div>
                                </div>
                            </div>
                            <div class="text-danger text-sm" v-if="(formData.signinOption == 'withEmail') && (!$v.formData.usernameEmail.required && $v.formData.usernameEmail.$error)">Please enter email.</div>
                            <div class="text-danger text-sm" v-if="(formData.signinOption == 'withEmail') && (!$v.formData.usernameEmail.email && $v.formData.usernameEmail.required && $v.formData.usernameEmail.$error)">Please enter valid email.</div>

                            <div class="text-danger text-sm" v-if="(formData.signinOption == 'withMobile') && (!$v.formData.usernameEmail.required && $v.formData.usernameEmail.$error)">Please enter mobile number.</div>
                            <div class="text-danger text-sm" v-if="(formData.signinOption == 'withMobile') && (!$v.formData.usernameEmail.numeric && $v.formData.usernameEmail.required && $v.formData.usernameEmail.$error)">Please enter valid mobile number.</div>
                            <div class="text-danger text-sm" v-if="(formData.signinOption == 'withMobile') && (!$v.formData.usernameEmail.minLength && $v.formData.usernameEmail.numeric && $v.formData.usernameEmail.required && $v.formData.usernameEmail.$error)">Please enter 10 digits mobile number.</div>
                            <div class="text-danger text-sm" v-if="(formData.signinOption == 'withMobile') && (!$v.formData.usernameEmail.maxLength && $v.formData.usernameEmail.minLength && $v.formData.usernameEmail.numeric && $v.formData.usernameEmail.required && $v.formData.usernameEmail.$error)">Please enter 10 digits mobile number.</div>

                            <div class="text-danger text-sm" v-if="(formData.signinOption == 'withUsername') && (!$v.formData.usernameEmail.required && $v.formData.usernameEmail.$error)">Please enter username.</div>
                            <div class="text-danger text-sm" v-if="(formData.signinOption == 'withUsername') && (!$v.formData.usernameEmail.alphaNum && $v.formData.usernameEmail.required && $v.formData.usernameEmail.$error)">Please enter valid username.</div>
                            <div class="text-danger text-sm" v-if="(formData.signinOption == 'withUsername') && (!$v.formData.usernameEmail.minLength && $v.formData.usernameEmail.alphaNum && $v.formData.usernameEmail.required && $v.formData.usernameEmail.$error)">Username contains minimum 6 chars.</div>
                            <div class="text-danger text-sm" v-if="(formData.signinOption == 'withUsername') && (!$v.formData.usernameEmail.maxLength && $v.formData.usernameEmail.minLength && $v.formData.usernameEmail.alphaNum && $v.formData.usernameEmail.required && $v.formData.usernameEmail.$error)">Username contains maximum 12 chars.</div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input type="password" class="form-control" id="loginPassword" v-model.trim="formData.password" maxlength="20" placeholder="Account Password">
                                <div class="input-group-append">
                                    <div class="input-group-text"><span class="fas fa-lock"></span></div>
                                </div>
                            </div>
                            <div class="text-danger text-sm" v-if="!$v.formData.password.required && $v.formData.password.$error">Please enter password.</div>
                            <div class="text-danger text-sm" v-if="!$v.formData.password.minLength && $v.formData.password.required && $v.formData.password.$error">Minimum 8 chars required.</div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-success btn-block" :disabled="isDisabled">Login To My Account</button>
                            </div>
                        <!-- /.col -->
                        </div>
                    </form>
                    <div class="text-center mt-3"><a href="login.html" class="text-center">I want to create Account</a></div>
                    <div class="text-center mt-1"><a href="login.html" class="text-center">Forgot Password?</a></div>
                </div>
                <!-- /.form-box -->
            </div><!-- /.card -->
        </div>
    </div>
</template>

<script>
import { required, minLength, maxLength, email, numeric, alphaNum } from 'vuelidate/lib/validators'

export default {
    name: "SignininView",
    data() {
        return {
            formData: {
                signinOption: 'withEmail',
                usernameEmail: 'onexuser@onexcrm.com',
                password: 'Test#1234'
            },
            signinData: {
                email: 'onexuser@onexcrm.com',
                mobile: '9898989898',
                username: 'onexUser1234',
                password: 'Test#1234'
            }
        }
    },
    components: {
        
    },
    watch: {
        
    },
    computed: {
        isDisabled() {
            return !this.formData.usernameEmail || !this.formData.password
        },
        setValidationRules() {
            if (this.formData.signinOption == 'withMobile') {
                return { 
                    usernameEmail: { required, numeric, minLength: minLength(10), maxLength: maxLength(10) }, 
                    password: { required, minLength: minLength(8) } 
                }
            } else if (this.formData.signinOption == 'withUsername') {
                return { 
                    usernameEmail: { required, alphaNum, minLength: minLength(6), maxLength: maxLength(12) }, 
                    password: { required, minLength: minLength(8) } 
                }
            } else {
                return { 
                    usernameEmail: { required, email }, 
                    password: { required, minLength: minLength(8) } 
                }
            }
        }
    },
    validations() {
        return {
            formData: this.setValidationRules
        }
    },
    methods: {
        submitSigninFormData() {
            var _this = this;
            _this.$v.$touch();
            if (_this.$v.$invalid) {
                return;
            }
            _this.login();
        },
        login() {
            var _this = this;
            var isLoginSuccess = false;
            if (_this.formData.signinOption == 'withEmail' && (_this.signinData.email == _this.formData.usernameEmail && _this.signinData.password == _this.formData.password)) {
                isLoginSuccess = true;
            }
            if (_this.formData.signinOption == 'withMobile' && (_this.signinData.mobile == _this.formData.usernameEmail && _this.signinData.password == _this.formData.password)) {
                isLoginSuccess = true;
            }
            if (_this.formData.signinOption == 'withUsername' && (_this.signinData.username == _this.formData.usernameEmail && _this.signinData.password == _this.formData.password)) {
                isLoginSuccess = true;
            }
            if (isLoginSuccess) {
                _this.$swal({
                    title: '<strong>SignIn Done!</strong>',
                    html: '<i><small>Please wait...</small></i>',
                    icon: 'success',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showCancelButton: false,
                    showConfirmButton: false
                });
                _this.$v.$reset();
                setTimeout(function () {
                    _this.$router.push({name: 'home-view'});
                }, 3000);
            } else {
                _this.$toast.error({title: 'Oops!! Access Denied', message: 'Please enter correct id and password', showMethod: 'pulse'})
            }
        }
    },
    beforeCreate()  {
        console.log('before create');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('before mount');
    },
    mounted() {
        document.body.classList.add('hold-transition', 'register-page');
        console.log('mounted xxx');
        console.log(this.$root);
        console.log(this.$parent);
    },
    beforeUpdate() {
        console.log('before update');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('before destroy');
    },
    destroyed() {
        document.body.classList.remove('hold-transition', 'register-page');
        this.$swal.close();
        console.log('destroyed');
    }    
}
</script>

<style scoped>

</style>
