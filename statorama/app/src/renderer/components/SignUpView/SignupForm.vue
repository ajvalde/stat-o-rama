<template>
    <div class="ink-flex">
        <div class="signup column-group push-center">
            <form id="sign_up" class="ink-form ink-formvalidator" methon="post" action="#">

                <div class="control-group required">
                    <label class="signup" for="name">NAME</label>
                    <div class="control">
                        <input id="name" v-model="name" name="name" type="text" data-rules="required" placeholder="Enter Name">
                    </div>
                </div>

                <div class="control-group required">
                    <label class="signup" for="email">E-MAIL</label>
                    <div class="control">
                        <input id="email" v-model="email" name="email" type="text" data-rules="required|email" placeholder="Enter Email">
                    </div>
                </div>

                <div class="control-group required">
                    <label class="signup" for="password">PASSWORD</label>
                    <div class="control">
                        <input id="pass" v-model="password" name="password" type="password" data-rules="required|min_length[8]" placeholder="Enter Password">
                    </div>
                </div>

                <div class="control-group required">
                    <label class="signup" for="confpass">CONFIRM PASSWORD</label>
                    <div class="control">
                        <input type="password" name="confpass" id="confpass" data-rules="matches[password]" data-label="password confirmation" />
                    </div>
                </div>

                <div class="control-group required">
                    <label class="signup" for="summoner_name">SUMMONER NAME</label>
                    <div class="control">
                        <input id="summoner_name" v-model="summoner_name" name="summoner_name" type="text" data-rules="required|text[true,false]" placeholder="Enter Summoner Name">
                    </div>
                </div>

                <div class="control-group required">
                    <label class="signup" for="battel_tag">BATTLE TAG</label>
                    <div class="control">
                        <input id="battle_tag"  v-model="battle_tag" name="battle_tag" type="text" data-rules="required|text[true,false]" placeholder="Enter Battle Tag">
                    </div>
                </div>
                <div class="column-group push-center">
                    <input  type="submit" name="sub" value="SUBMIT" class="ink-button success blue" />
                </div>
            </form>
        </div>
    </div> 
  
</template>

<style>
    @import url(https://fonts.googleapis.com/css?family=Audiowide);
    .signup {
        font-family: Audiowide;
        color: white;
    }
    .ink-form .control-group.required label, .ink-form .control-group.required p.label {
        color: white;
        font-size: 20px;
    }
</style>

