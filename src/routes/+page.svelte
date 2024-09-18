<script lang="ts">
    import headBg from "$img/background.svg";
    import apple from "$img/pomme.png";
    import wave from "$img/wave.svg";
    import logo from "$img/logoBig.svg";
    import cart from "$img/cart.svg";
    import map from "$img/map.svg";
    import account from "$img/account.svg";
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
<nav>
    <img class="map" src={map} alt="map" />
    <img class="account" src={account} alt="account" />
    <img class="cart" src={cart} alt="cart" />
</nav>

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

    nav {
        width: 98%;
        height: 3rem;
        display: flex;
        align-items: center;
        padding-right: 2rem;
        justify-content: end;
        gap: 2rem;
        position: absolute;
        top: 100vh;
        transform: translateY(-3rem);
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
