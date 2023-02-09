<template>

    <section id="content" role="main" style="height: 100vh;">
        <header class="navbar bg-primary-dark shadow-sm fixed-top">
    
    <a class="navbar-brand ml-0 mr-auto" href="#"><img style="height: 52px;" :src="logo" /></a>
    <marquee class="mq" width = "60%" style="color:#0aeb85"><div v-html="announcementText"></div></marquee>
    <div style="display: contents;">
       
        <div id="clock-2" style="padding:0 9px 0px 8px">
            <!-- <a href="#"  @click="fetchAnnouncement">fetch</a> -->
            <p>Dj Timer</p>
            <div style="display: none;" class="btn-container">
                <a href="#" id="start" @click="start">Start</a>
                <a href="#" id="stop" @click="stop">Stop</a>
                <a  href="#" id="reset" @click="reset">Reset</a>
            </div>
                <p class="date"></p>
                <p class="time timer_time" :style="{'color': color_h}">{{ timer }}</p>
        </div>
            <div>  
                <div id="clock" style="padding:0 9px 0px 8px">
                    <p class="date"></p>
                    <p class="time">{{ time }}</p>
                </div>
            </div> <!---->
        </div>
    <p style="margin-bottom: 0;" class="username">Hi , {{username}}</p>
    <div class="dropdown ml-3">
        <button aria-expanded="false" aria-haspopup="true" class="navbar-toggler" aria-label="Toggle Menu" data-toggle="dropdown" type="button">
            <i class="material-icons" aria-hidden="true">more_vert</i>
        </button>
        <ul class="dropdown-menu dropdown-menu-right">
            <!-- <li>
                <a class="dropdown-item" href="/dashboard">
                    <i class="material-icons" aria-hidden="true">home</i>
                    Dashboard                </a>
            </li>
            <li class="dropdown-divider">&nbsp;</li>
                            <li>
                    <a class="dropdown-item" href="/admin">
                        <i class="material-icons" aria-hidden="true">settings</i>
                        System Administration                    </a>
                </li>
                        <li>
                <a class="dropdown-item" href="/profile">
                    <i class="material-icons" aria-hidden="true">account_circle</i>
                    My Account                </a>
            </li>
            <li>
                <a class="dropdown-item" href="/profile/theme">
                    <i class="material-icons" aria-hidden="true">invert_colors</i>
                    Switch Theme                </a>
            </li>
            <li>
                <a class="dropdown-item" href="https://docs.azuracast.com/en/user-guide/troubleshooting" target="_blank">
                    <i class="material-icons" aria-hidden="true">help</i>
                    Help                </a>
            </li> -->
            <li class="dropdown-divider">&nbsp;</li>
             <li>
                <a class="dropdown-item" @click="Logout" href="#">
                <i class="material-icons" aria-hidden="true">exit_to_app</i>
                Sign Out</a></li>
            </ul>
    </div>
</header>
            <login-modal ref="LoginModal" :id="id" :login="LoginModal"
                                       ></login-modal>
      
        <div class="container pt-5">
            <div class="form-row">
                <div class="col-md-4 mb-sm-4">
                    <settings-panel v-bind="{ stationName, baseUri, libUrls }"></settings-panel>
                </div>

                <div class="col-md-8">
                    <div class="form-row mb-3">
                        <div class="col-md-12">
                            <microphone-panel></microphone-panel>
                        </div>
                    </div>
                    <div class="form-row mb-3">
                        <div class="col-md-12">
                            <mixer-panel></mixer-panel>
                        </div>
                    </div>
                    <div class="form-row mb-4">
                        <div class="col-md-6 mb-sm-4">
                            <playlist-panel id="playlist_1"></playlist-panel>
                        </div>

                        <div class="col-md-6">
                            <playlist-panel id="playlist_2"></playlist-panel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.pt-5 {
    padding-top: 8rem!important;
}
.mq{
    font-size: 25px;
}
#clock-2{
    font-size:19px;
}

</style>
<script>
import axios from 'axios';
import MixerPanel from './WebDJ/MixerPanel.vue';
import MicrophonePanel from './WebDJ/MicrophonePanel.vue';
import PlaylistPanel from './WebDJ/PlaylistPanel.vue';
import SettingsPanel from './WebDJ/SettingsPanel.vue';
//import playListCatModal from "../Account/playListCatModal.vue";
import Stream from './WebDJ/Stream.js';
import LoginModal from "../Account/LoginModal.vue";


export default {
    data: function () {
        return {
                'stream': Stream,
                 LoginModal:null,
                 color_h:'red',
                username:'',
                "id":'LoginModal',
                time: '',
                date: '',
                week : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
                timer: '00:00:00.000',
                timeBegan : null
                , timeStopped : null
                , stoppedDuration : 0
                , started : null
                , running : false,
                announcementText:'',
        };
    },
    components: {
        MixerPanel,
        MicrophonePanel,
        PlaylistPanel,
        SettingsPanel,
         LoginModal
    },
    props: {
        stationName: String,
        libUrls: Array,
        baseUri: String,
        changePasswordUrl: String,

    },
    provide: function () {
        return {
            getStream: this.getStream,
            resumeStream: this.resumeStream
        };
    },
    methods: {
        async fetchAnnouncement() {
            
            var config = {
                method: 'get',
                responseType: 'json',
                url: `https://hgcradio.org/api/announcements`,
                headers: { 
                    'Authorization': `Bearer ${JSON.parse(localStorage.UserData).token}`
                },
                //  data : obj
            };
          
            await this.axios(config)
                .then((response)=>{
                    console.log(response.data.data.data);
                    if(response.data.data.data.length > 0 ){
                        this.announcementText = response.data.data.data[0].details;
                    }
                    
                
               
            }).catch( (error) => {
               
            }).finally(()=>{
                //this.processing = false
            })
            
            
        },
        updateTime() {
            var cd = new Date();
            this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
            this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];
        },
        zeroPadding(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        },
        start() {
            if(this.running) return;
            
            if (this.timeBegan === null) {
                this.reset();
                this.timeBegan = new Date();
            }

            if (this.timeStopped !== null) {
                this.stoppedDuration += (new Date() - this.timeStopped);
            }

            this.started = setInterval(()=>{
                this.clockRunning();
                this.color_h = 'green';
            },10)
            this.running = true;
        },

        stop() {
            this.running = false;
            this.timeStopped = new Date();
            clearInterval(this.started);
        },
        reset() {
            this.running = false;
            clearInterval(this.started);
            this.stoppedDuration = 0;
            this.timeBegan = null;
            this.timeStopped = null;
            this.timer = "00:00:00.000";
        },
        clockRunning(){
            var currentTime = new Date()
            var timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration)
            var hour = timeElapsed.getUTCHours()
            var min = timeElapsed.getUTCMinutes()
            var sec = timeElapsed.getUTCSeconds()
            var ms =  timeElapsed.getUTCMilliseconds();

            this.timer = 
            this.zeroPrefix(hour, 2) + ":" + 
            this.zeroPrefix(min, 2) + ":" + 
            this.zeroPrefix(sec, 2) + "." + 
            this.zeroPrefix(ms, 3);
            console.log('here');
        },
        zeroPrefix(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        },
        getStream: function () {
            this.stream.init();

            return this.stream;
        },
        resumeStream: function () {
            this.stream.resumeContext();
        },
        doChangePassword() {
            //this.$refs.playListCatModal.open();
        },
        Logout(){
            localStorage.removeItem('Login');
            localStorage.removeItem('UserData');

            location.reload();
        }
    },
     mounted() {
        var _t = this;
         if(localStorage.getItem('Login') == 'true') {
             let user = JSON.parse(localStorage.getItem('UserData'));
             this.username = user.user.name;
             this.logo = user.user.avatar_url;
             console.log(user.user.dj_account);
             let us = user.user.dj_account.username;
             let pp = user.user.dj_account.password;
              localStorage.setItem('usernamedj',us)
              localStorage.setItem('passworddj',pp)
              
            //   setTimeout(()=>{
               
            //    // $('#usernamedj').val(localStorage.getItem('usernamedj'));
            //    // $('#passworddj').val(localStorage.getItem('passworddj'));
            //     $('.djclick').click();
            //  },3000)
            // setInterval(()=>{
            //      _t.updateTime()
            //  },1000);
             setTimeout(()=>{
                //_t.start()
                setInterval(() => {
                    var hour = document.getElementById('hour')
                    var minute = document.getElementById('minute')
                    var second = document.getElementById('second')
                    var d = new Date(); //object of date()
                    var hr = d.getHours();
                    var min = d.getMinutes();
                    var sec = d.getSeconds();
                    var hr_rotation = 30 * hr + min / 2; //converting current time
                    var min_rotation = 6 * min;
                    var sec_rotation = 6 * sec;
                
                    hour.style.transform = `rotate(${hr_rotation}deg)`;
                    minute.style.transform = `rotate(${min_rotation}deg)`;
                    second.style.transform = `rotate(${sec_rotation}deg)`;
                }, 1000);
             },2000)
             setInterval(()=>{
                this.fetchAnnouncement();
             },5000)
             
         } else {
             this.$refs.LoginModal.open();
         }
        
    },
    
};
</script>
