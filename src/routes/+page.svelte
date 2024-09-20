<script lang="ts">
    import headBg from "$img/background.svg";
    import apple from "$img/pomme.png";
    import wave from "$img/wave.svg";
    import logo from "$img/logoBig.svg";
    import search from "$img/search.svg";

    import Nav from "$components/layouts/Nav.svelte";
</script>

<header>
    <div class="content">
        <h1>Ferme <br /><span>Authentique</span></h1>
    </div>

    <div class="graphic">
        <div>
            <img class="bgimg" src={headBg} alt="apple background" />
            <img class="img" src={apple} alt="apple background" />
        </div>
    </div>
    <img class="flower" src={logo} alt="flower" />
    <img class="background" src={wave} alt="wave" />
</header>
<Nav></Nav>

<style lang="scss">
    header {
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        /* background: red; */

        .background {
            width: 100%;
            height: 80%;
            position: absolute;
            z-index: -1;
        }

        .flower {
            height: 65vh;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateX(-20%);
        }

        .graphic {
            width: 60%;
            position: relative;
            display: flex;
            justify-content: end;
            align-items: start;

            > div {
                max-width: 100%;
                position: relative;

                .bgimg {
                    max-width: 100%;
                    max-height: 85vh;
                }

                .img {
                    max-width: 60%;
                    max-height: 60%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    position: absolute;
                }
            }
        }

        .content {
            width: 40%;
            padding-top: 4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            h1 {
                font-size: 4rem;
                color: $green;

                span {
                    margin-left: 4rem;
                    color: $red;
                }
            }
        }
    }

    #location {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        position: absolute;
        top: 0;
        right: -101%;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(13.5px);
        #map {
            width: 48%;
            height: 90%;
            border-radius: 0.5rem;
            background: grey;
        }
        #right-side {
            width: 48%;
            height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            border-radius: 0.5rem;
            // background: yellow;
            #search {
                width: 70%;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: center;
                border-radius: 0.5rem;
                background: $red;
                .search__input {
                    width: 100%;
                    height: 100%;
                    background: none;
                    outline: none;
                    border: none;
                    color: $white;
                }

                .search__btn {
                    height: 100%;
                    background: none;
                    border: none;
                }
            }

            #farms {
                width: 100%;
                height: 93%;
                border-radius: 0.5rem;
                box-shadow:
                    rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
                    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
            }
        }
    }

    @media screen and (max-width: 1150px) {
        header {
            .content {
                width: 60%;
                padding-top: 0;
            }

            .graphic {
                width: 40%;
            }
        }
    }

    @media screen and (max-width: 890px) {
        #location {
            flex-direction: column;
            justify-content: space-around;
            gap: 2rem;

            #maps {
                width: 70%;
                height: 70%;
            }
        }
    }

    @media screen and (max-width: 800px) {
        header {
            flex-direction: column-reverse;
            justify-content: flex-end;
            align-items: flex-start;

            .flower {
                height: 20vh;
            }

            .content {
                width: 100%;
            }

            .graphic {
                width: auto;
                height: 50%;
                align-self: flex-end;

                > div {
                    max-width: 90%;
                    height: 100%;
                    .bgimg {
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
            }
        }

        nav {
            justify-content: center;
        }
    }

    @media screen and (max-width: 476px) {
        header .content h1 {
            font-size: 2.5rem;
        }
    }

    @media screen and (max-width: 370px) {
        header {
            .graphic {
                height: fit-content;
            }
        }
    }
</style>
