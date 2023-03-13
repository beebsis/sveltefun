<script>
    import Icon from '@iconify/svelte';
</script>

<div class="hero gap-2 px-5 mb-4 h-screen grid items-center content-center">
    <div class="hero__flex flex flex-col md:flex-row justify-center content-center gap-5 max-w-[1000px] w-full m-auto p-[25px]  rounded-lg backdrop-blur-sm bg-darkTransparent">
        <div class="max-w-[500px] text-center md:text-left md:flex md:flex-col md:justify-center">
            <span class="text-3xl md:text-4xl">🎃</span>
            <p class="hidden md:text-4xl md:block font-bold">Welcome welcome, I'm</p>
            <p class="text-3xl md:text-4xl font-bold"><span class=""></span>Beebsis<span class=""></span></p>
            <div class="text-lg md:text-2xl flex flex-col gap-4 md:mt-5">
                <p class="">Web-Developer, D&D player, home cook & procrastinator</p>
                <p class="">Experience in <code>HTML, CSS, JS & PHP, ReactJS, SQL, MySQL, MongoDB</code></p>
            </div>
        </div>
        <div>
            <img src="/githubpfp.png" alt="" loading="lazy" class="rounded-lg">
        </div>
    </div>
    <div class="hero__footer w-full">
        <div class="grid__goto__wrapper mt-5 mb-5 h-[256px] w-[256px] m-auto">
            <div class="h-full w-full grid grid-cols-6 grid-rows-3 gap-3">
                <div class="goto goto1">
                    <a href="#0">
                        <span>Socials</span>
                    </a>
                </div>
                <div class="goto goto2">
                    <a href="#0">
                        <span>Hobby</span>
                    </a>
                </div>
                <div class="goto goto3">
                    <a href="./resources">
                        <span>Resources</span>
                    </a>
                </div>
                <div class="goto goto4">
                    <a href="#0">
                        <span>text4</span>
                    </a>
                </div>
                <div class="goto goto5">
                    <a href="#0">
                        <span>Bigger Projects</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="masonry-container h-screen w-full" id="masonry-container">
    <div class="box box-1 code-box">
        <a href="https://github.com/beebsis" target="_blank">
            <div class="link-context-wrapper">
                <i class="fa-solid fa-code"></i>
                <p>Checkout my study projects. Tuning into MERN stack.</p>
            </div>
        </a>
    </div>
    <div class="box box-2 twitter-box">
        <a href="https://twitter.com/beebsis" target="_blank">
            <div class="link-context-wrapper">
                <div class="handle__container">
                    <i class="fa-brands fa-twitter"></i>
                    <p><span class="handle__slash">/ </span>Beebsis</p>
                </div>
                <p>Check me out on Twitter for projects, Community updates and random nerd stuff.</p>
            </div>
        </a>
    </div>
    <div class="box box-3 github-box">
        <a href="https://github.com/beebsis" target="_blank">
            <div class="link-context-wrapper">
                <div class="handle__container">
                    <i class="fa-brands fa-github"></i>
                    <p><span class="handle__slash">/ </span>Beebsis</p>
                </div>
                <p>Checkout my repos on my GitHub! Using codepen a lot to help people grasp the UI concepts.</p>
            </div>
        </a>
    </div>
    <div class="box box-4 linkedin-box">
        <a href="https://www.linkedin.com/in/alexander-pedersen-b3bb7119b/" target="_blank">
            <div class="link-context-wrapper">
                <div class="handle__container">
                    <i class="fa-brands fa-linkedin"></i>
                    <p><span class="handle__slash">/ </span>Beebsis</p>
                </div>
                <p>Reach out to me on LinkedIn.</p>
            </div>
        </a>
    </div>
    <div class="box box-5 spotify-box">
        <a href="https://open.spotify.com/user/1125422966?si=14d8ea392fc44282" target="_blank">
            <div class="link-context-wrapper">
                <i class="fa-brands fa-spotify"></i>
                <p>Interested in music? Have a look, I listen to a bunch of different genres.</p>
            </div>
        </a>
    </div>
    <div class="box box-6 paypal-box">
        <a href="https://www.paypal.com/paypalme/beebsis" target="_blank">
            <div class="link-context-wrapper">
                <i class="fa-brands fa-paypal"></i>
                <p>Donations & Commissions goes through here.</p>
            </div>
        </a>
    </div>
    <div class="box box-7 discord-box">
        <a href="#0">
            <div class="link-context-wrapper" target="_blank">
                <i class="fa-brands fa-discord"></i>
                <p>Beebsis#0001</p>
            </div>
            <!--<div class="link-context-wrapper" target="_blank">
                <i class="fa-brands fa-twitch"></i>
                <p>More nerdy stuff and games on Twitch! Anything from Action to chill resource management and RTS.</p>
            </div>-->
        </a>
    </div>
</div>