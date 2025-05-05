<template>
<div class="chat">
    <div class="chat__box">
    <div class="chat__body">
        <div style="height: 600px; overflow: auto" class="chat__body__wrapper">
            <div class="chat__message" v-for="(item, key) in data" :key="id+key+'ms'"
                :class="[
                    item.type ? 'chat__message-server' : 'chat__message-client',
                ]">
                <div
                    class="chat__message__wrapper--block chat__message__wrapper--text"
                    >
                    <Profile v-if="item.type == 'server'"></Profile>
                    <div v-else class="chat__message__you"><span>Tú</span></div> 

                    <div
                      class="chat__wrapper__texts"
                      v-if="item.element == 'texts'"
                    >
                      <Message
                        :text="el2"
                        v-for="(el2, i) in item.content"
                        :key="'texts' + i"
                      ></Message>
                    </div>

                    <div
                      class="chat__message__wrapper chat__message__wrapper--block"
                      v-else-if="item.message"
                    >
                      <Message :text="item.message"></Message>
                    </div>
                </div>

                <div
                    class="chat__message__wrapper--block chat__message__wrapper--text"
                    v-if="item.element != 'texts' && item.texts"
                  >
                    <Profile v-if="item.type == 'server'"></Profile>

                    <div class="chat__wrapper__texts">
                      <Message
                        :text="elText"
                        v-for="(elText, i) in item.texts"
                        :key="'texts' + i"
                      ></Message>
                    </div>
                  </div>

                  <div
                    class="chat__message__wrapper--block chat__message__wrapper--text"
                    v-if="item.message_above"
                  >
                    <div
                      class="chat__message__wrapper chat__message__wrapper--block chat__message--ml-auto"
                    >
                      <Message :text="item.message_above"></Message>
                    </div>
                  </div>

                    <div
                        class="chat__message__wrapper chat__message__wrapper--block chat__message__wrapper--el"
                        v-if="item.element == 'cards'"
                        >
                        <Card :array="item.content"></Card>
                        </div>
                        <div
                        class="chat__message__wrapper chat__message__wrapper--block chat__message__wrapper--el"
                        v-if="item.element == 'buttons'"
                        >
                        <Button :array="item.content"
                        :triggered="item.triggered"></Button>
                        </div>

                     <div
                    class="
                      chat__message__wrapper chat__message__wrapper--carousel
                    "
                    v-if="item.element == 'carousel'"
                  >
                    <Carousel
                      :array="item.content"
                      :triggered="item.triggered"
                    ></Carousel>
                  </div>

                  <template v-if="item.message_below">
                    <div
                      class="
                        chat__message__wrapper--block chat__message__wrapper--text
                      "
                      v-if="item.message_below != 'Menú Inicio Botón'"
                    >
                      <div
                        class="
                          chat__message__wrapper
                          chat__message__wrapper--block
                          chat__message--ml-auto
                        "
                      >
                        <Message :text="item.message_below"></Message>
                      </div>
                    </div>
                    <div
                      class="
                        chat__message__wrapper
                        chat__message__wrapper--block
                        chat__message__wrapper--el
                      "
                      v-else
                    >
                      <Button
                        :array="[{'text' : 'Menú Inicio'}]"
                        :triggered="item.triggered"
                      ></Button>
                    </div>
                  </template>



                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>
<style>
.VueCarousel-slide {
  position: relative;
  color: #fff;
  text-align: center;
  min-height: 100px;
}
</style>
<script>
import Message from "./Message";
import Profile from "./Profile";
import Carousel from "./Carousel";
export default {
    components:{
        Message,
        Profile,
        Carousel
    },
    props:{
        data: Array,
        id: String
    }
}
</script>

<style lang="scss">
.chat__link__text {
  display: none;
}
.chat {
  button:disabled {
    opacity: 0.75;
  }
  /* TRANSITION */
  /* always present */
  .expand-transition {
    transition: all 0.5s ease;
  }
  .send {
    vertical-align: middle;
    //margin-top: 3px;
  }
  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */
  .expand-enter,
  .expand-leave {
    height: 0;
    opacity: 0;
  }
  .bg {
    background: #f6f6fc;
  }
  input:disabled {
    background: #cecece;
  }
  .input {
    width: 100%;
    height: 48px;
    border: none;
    outline: none;
    display: inline;
    padding: 0 45px 0 15px;
    border-radius: 10px;
  }

  .button {
    border: 0;
    padding: 0;
    cursor: pointer;
    //font-family: 'Poppins', Helvetica, Arial, sans-serif;
    font-weight: normal;
    &:focus {
      outline: 0;
    }
  }
  .input {
    //font-family: 'Poppins', Helvetica, Arial, sans-serif;
    font-weight: normal;
  }
  .font-weight-light {
    font-weight: 300;
  }
  .font-weight-bold {
    font-weight: 700;
  }
  .color-secondary {
    color: darkgrey;
  }
}
.chat__link {
  background: #005493;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  padding: 8px 20px;
  margin-right: 0;
  &::before {
    content: "Elegir";
  }
}
@media screen and (max-width: 768px) {
  .chat__link {
    margin-right: 5px !important;
  }
}

.chat__close {
  margin-left: auto;
  background: transparent;
  font-size: 16px;
  position: absolute;
  top: 20px;
  right: 20px;
  svg {
    vertical-align: middle;
    stroke-width: 30;
    color: white;
  }
}
.chat__company {
  font-size: 10px;
  display: block;
  text-align: right;
  letter-spacing: -0.1px;
  margin-top: 6px;
  a {
    color: #00686f;
    text-decoration: none;
    font-size: 10px;
  }
}

.chat__message__wrapper--carousel {
  margin-left: 20px;
}
.chat__dialog {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  max-width: 200px;
  border-radius: 10px;
  font-size: 13px;
  background: white;
  &::before {
    content: "";
    position: absolute;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    /*-moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);*/
    transform: rotate(45deg);
    bottom: -5px;
    right: 31px;
    border-color: transparent #fff #fff transparent;
    border-style: solid;
    border-width: 5px;
  }
  padding: 10px 12.5px;
}

.chat__message-server-typing {
  .chat__message__text {
    float: left !important;
    font-size: 20px !important;
    letter-spacing: 5px !important;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }
}

* {
  //outline: 1px solid red;
}
.chat__button--main {
  position: relative;
  .chat__notification {
    position: absolute;
    top: 0;
    right: 0;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
}
.ib-wrapper {
  position: relative;
  display: flex;
  //width: calc(100% - 45px);
  /*margin-left: 20px;
  margin-right: 20px;*/
  border-radius: 10px;
}
.chat__message__wrapper--text {
  display: flex;
  padding: 0 15px;
  flex-wrap: wrap;
}
.chat__message__wrapper--el {
  margin-left: 50px;
}
.chat__name {
  h3 {
    font-size: 22px;
  }
}
.ib-wrapper__button {
  cursor: pointer;
  background: transparent;
  border-radius: 50%;
  height: 48px;
  margin: 10px;
  position: absolute;
  right: 0px;
  margin: auto;
  top: 0;
  bottom: 0;
  border: none;
  outline: none;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
  width: 58px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 10px 0;
  background: #005493;
}
.chat__message__you {
  font-size: 14px;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  width: 100%;
  flex: auto;
  /* text-align: right; */
  /* align-items: stretch; */
  display: flex;
  span {
    margin-left: auto;
  }
}

.chat {
  .chat__wrapper-sound {
    display: flex;
    align-items: center;
  }
  x .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  input:focus {
    //outline: none;
    z-index: 0 !important;
  }

  .chat__button {
    margin-left: auto;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    padding: 0;
    //background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .img__wrapper {
      display: flex;
      justify-content: center;
      overflow: hidden;
      display: flex;
      align-items: center;
      height: inherit;
      width: inherit;
      border-radius: 50%;
      background-color: transparent;
      img {
        //height: 45px;
        height: 80px;
        width: auto;
      }
    }
  }
  .chat__box {
    margin-bottom: 10px;
    &.active {
      margin-bottom: 0;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      //background-image: url(https://storage.googleapis.com/playgroup-bots/wiener/img/fondo.jpg);
    }
    .chat__body {
    }
    .chat__body,
    .chat__footer {
      //background: white;
      background: rgb(234, 238, 243);
    }
    .chat__header {
      background: #1bafba;
      background-image: url(https://storage.googleapis.com/playgroup-web/bot/images/bg-bot.jpg);
      background-size: cover;
      border-bottom: 1px solid #d0d0ef;
      padding: 8px 6px 8px;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      position: relative;
      color: #fff;
    }
    .chat__wrapper__texts {
      max-width: 73%;
      .chat__message__text {
        float: left !important;
      }
    }
    .chat__message {
      //display: flex;
      width: 100%;
      .chat__message__wrapper {
        margin-bottom: 7px;
        &.chat__message__wrapper--block {
          //width: 75%;
          display: block;
          max-width: 73%;
        }
        &.chat__message__wrapper--full {
          width: 100%;
        }
      }
      .chat__message__text {
        display: inline-block;
        padding: 12px 12px;
        font-size: 15px;
        margin-bottom: 7px;
        border-radius: 5px;
        background: white;
        letter-spacing: -0.1px;
        a {
          text-decoration: underline;
          font-weight: bold;
        }
      }

      &.chat__message-server {
        width: 100%;
        .chat__message__wrapper {
          margin-right: auto;
        }
        .chat__message__text {
          float: right;
          border-radius: 0 10px 10px 10px;
        }
      }
      &.chat__message-client {
        .chat__message__wrapper {
          margin-left: auto;
          display: flex;
          justify-content: flex-end;
        }
        .chat__message__text {
          background: #005493;
          background: -webkit-gradient(
            left top,
            right top,
            color-stop(0, #00656d),
            color-stop(100%, #0da9bd)
          );
          background: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#2ac6bf),
            to(#158bca)
          );
          background: linear-gradient(90deg, #2ac6bf 0, #158bca);
          color: #fff;
          border-radius: 10px 0px 10px 10px;
        }
      }
    }
    .chat__body__wrapper {
      padding: 20px 0px;
      height: 400px;
      //overflow: auto;
    }
    .chat__footer {
      padding-bottom: 6px;
      padding-right: 15px;
      padding-left: 15px;
      padding-top: 10px;
    }
  }
}
</style>