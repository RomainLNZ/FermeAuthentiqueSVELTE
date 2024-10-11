<script lang="ts">
    import headBg from "$img/background.svg";
    import userProfil from "$img/UserProfil.png";
    import wave from "$img/wave.svg";
    import logo from "$img/logoBig.svg";
    import StarIcon from "~icons/heroicons/star-solid";
    import Settings from "~icons/heroicons/cog-6-tooth-20-solid";
    import Edit from "~icons/heroicons/pencil-solid";
    import Logout from "~icons/heroicons/arrow-left-end-on-rectangle-16-solid";
    import MarketIcon from "~icons/heroicons/building-storefront-20-solid";

    import user, { type DataAuth } from "$stores/user";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import Modal from "$components/ui/Modal.svelte";

    let auth: false | DataAuth = $state(false);
    onMount(() => {
        const unsubscribe = user.auth.subscribe((value) => {
            if (value === false) {
                goto("/");
            } else {
                auth = value as DataAuth;
            }
        });
        return () => unsubscribe();
    });

    let editModal = $state(false);
</script>

{#if auth}
    <header>
        <div class="edit">
            <button onclick={() => (editModal = !editModal)}>
                <Settings />
            </button>
            <button><Logout /></button>
        </div>
        <div class="content">
            <h1>{auth.firstname} <br /><span>{auth.lastname}</span></h1>
            {console.log()}
            <p>{auth.email}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="action">
                <button>
                    <MarketIcon />
                    <p>Market</p>
                </button>
                <button class="secondary">
                    <StarIcon />
                    <p>Favoris</p>
                </button>
            </div>
        </div>

        <div class="graphic">
            <div>
                <img class="bgimg" src={headBg} alt="apple background" />
                <img class="img" src={userProfil} alt="user profil" />
            </div>
        </div>
        <img class="flower" src={logo} alt="flower" />
        <img class="background" src={wave} alt="wave" />
    </header>
    <Modal
        display={editModal}
        title="Edition"
        onClose={() => (editModal = !editModal)}
    >
        {#snippet content()}

        {/snippet}
    </Modal>
{/if}

<style lang="scss">
    header {
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;

        .edit {
            position: absolute;
            right: 0;
            z-index: 4;
            display: flex;
            justify-content: end;
        }

        button {
            width: 50px;
            height: 50px;
            margin-left: 5px;
            background: none;
            border: none;
        }

        .background {
            width: 100%;
            height: 80%;
            position: absolute;
            z-index: -1;
        }

        .flower {
            height: 25vh;
            position: absolute;
            bottom: 1%;
            left: 0;
            z-index: -1;
            transform: translateX(-20%);
            animation: wind 4s infinite ease-in-out;
        }

        @keyframes wind {
            0% {
                transform: translateX(-20%) rotate(0deg);
            }
            25% {
                transform: translateX(-20%) rotate(2deg);
            }
            50% {
                transform: translateX(-20%) rotate(0deg);
            }
            75% {
                transform: translateX(-20%) rotate(-2deg);
            }
            100% {
                transform: translateX(-20%) rotate(0deg);
            }
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
            gap: 2rem;
            h1 {
                font-size: 4rem;
                color: $green;

                span {
                    margin-left: 4rem;
                    color: $red;
                }
            }
            p {
                margin-left: 4rem;
            }
            .action {
                width: 90%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                button {
                    width: 7rem;
                    height: 7rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    border-radius: 1rem;
                    border: none;
                    color: $white;
                    background: $green;
                    font-size: 2.5rem;

                    &.secondary {
                        background: $red;
                    }

                    p {
                        margin: 0%;
                        font-size: 1rem;
                    }
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
            // align-items: flex-start;

            .flower {
                height: 40vh;
                top: 110px;
            }

            .content {
                margin-left: 4rem;
                // width: 100%;
                // p {
                //     width: 30%;
                // }
            }

            .action {
                gap: 3rem;
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

    @media screen and (max-width: 680px) {
        .flower {
            width: 20rem;
            z-index: -1;
        }

        .action {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 540px) {
        header {
            .flower {
                width: 45%;
                left: 21rem;
                top: 65rem;
                transform: scaleX(-1);
            }
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

            .content {
                width: 70%;
            }
        }
    }
</style>
