<template>
<div class="container">
  <div class="content">
    <div class="contact-card paper-card">
      <div class="profile-container">
        <div class="avatar">
        </div>
        <div class="name">
          Abhinay Omkar
        </div>
        <div class="slide-container">
          <div class="about-section is-visible">
            <div class="email">
              <a href="mailto:abhiomkar@gmail.com">abhiomkar@gmail.com</a>
            </div>
            <div class="location">
              Bangalore, India
            </div>
            <div class="social-links">
              <a class="facebook-link social-link" href="https://facebook.com/abhiomkar"></a>
              <a class="twitter-link social-link" href="https://twitter.com/abhiomkar"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="progress-bar"></div>
      <form class="contact-form" id="contact-form" ref="form">
        <div class="form-row form-row-subject">
          <label for="contact-subject">Subject</label>
          <input tabindex="0"
              type="text"
              aria-label="Email subject"
              name="contact-subject"
              id="contact-subject"
              class="contact-subject"
              v-model="subject"
              placeholder="Enter subject here" />
        </div>
        <div class="form-row form-row-from">
          <label for="contact-from">From</label>
          <input type="text"
              aria-label="Your email id"
              name="contact-sender-email"
              id="contact-sender-email"
              class="contact-from"
              v-model="sender"
              placeholder="elon@spacex.com" />
        </div>
        <div class="form-body-row">
          <label for="contact-body">Message</label>
            <textarea name="contact-body"
                id="contact-body"
                class="contact-form-body"
                placeholder="Enter your message here"
                aria-label="Email body to send message"
                v-model="body"></textarea>
          <button id="contact-send-button"
            aria-label="Send email action button"
            class="flat-colored-button form-submit-button"
            :disabled="inProgress"
            @click="sendMail">
            {{ inProgress ? 'Sending' : 'Send' }}
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="status-bar"
      :class="{'has-error': hasError, 'is-visible': statusBarMessage}">
    {{ statusBarMessage }}
  </div>
</div>
</template>

<script>
import axios from 'axios';

const MAILGUN_API_URL =
    'https://us-central1-abhiomkar-in.cloudfunctions.net/sendMail';

export default {
  data() {
    return {
      sender: '',
      subject: '',
      body: '',
      isMailSent: false,
      statusBarMessage: '',
      hasError: false,
      inProgress: false,
    };
  },
  methods: {
    sendMail() {
      this.hasError = false;
      this.statusBarMessage = '';
      this.inProgress = true;

      const data = {
        subject: this.subject,
        body: this.body,
        sender: this.sender,
      };

      axios.post(MAILGUN_API_URL, data)
        .then(() => {
          this.statusBarMessage = 'Mail sent';
          this.isMailSent = true;
          this.resetForm();
        })
        .catch(() => {
          this.statusBarMessage = `Couldn't send. Please try again later.`;
          this.hasError = true;
        })
        .then(() => {
          this.inProgress = false;

          setTimeout(() => {
            this.hasError = false;
            this.statusBarMessage = '';
          }, 8000);
        });
    },
    resetForm() {
      this.subject = '';
      this.body = '';
      this.sender = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/color.scss";
@import "../assets/css/variable.scss";
@import "../assets/css/shadow.scss";

.container {
  height: 100%;
  font-size: 15px;
  color: $blackAlpha84;
  padding: 18px 0;

  .content {
    padding: 0 12px;
    max-width: $contentWidth;
    margin: 12px auto 0 auto;
  }

  .contact-card {
    max-width: 480px;
    margin: 35px auto 0;

    a {
      text-decoration: none;
    }
  }

  .profile-container {
    text-align: center;
    line-height: 22px;
    border-bottom: 1px solid $blackAlpha10;
    padding-bottom: 12px;
    margin-top: -25px;

    .avatar {
      background: url("~/static/images/abhiomkar-avatar.jpg") no-repeat center;
      background-size: 60px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      margin: 0 auto;
      box-shadow: $elevation_1dp;
    }

    .name {
      margin-top: 6px;
      font-size: 16px;
    }

    .email a,
    .location,
    .social-links a {
      color: $blackAlpha60;
      font-size: 13px;
    }
  }

  .social-links {
    padding-top: 6px;
  }

  .social-link {
    background-size: 20px;
    height: 20px;
    width: 20px;
    display: inline-block;
    margin: 0 4px;
  }

  .facebook-link {
    background: url("~/static/images/facebook-logo.png") no-repeat center;
  }

  .twitter-link {
    background: url("~/static/images/twitter-logo.png") no-repeat center;
  }

  .form-row-subject {
    margin: 0 14px;
    padding: 14px 0;
    border-bottom: 1px solid $blackAlpha10;
    display: flex;
    align-items: center;

    label {
      width: 65px;
    }

    input {
      margin-left: 6px;
      flex-grow: 1;
    }
  }

  .form-row-from {
    padding: 14px;
    border-bottom: 1px solid $blackAlpha10;

    display: flex;
    align-items: center;

    label {
      width: 65px;
    }

    input {
      margin-left: 6px;
      flex-grow: 1;
    }
  }

  .form-body-row {
    position: relative;
    padding-top: 14px;

    label {
      margin: 14px;
    }
  }

  .contact-form {
    overflow: hidden;
    position: relative;
  }

  .contact-form-body {
    padding: 14px;
    height: 220px;
    width: 100%;
    resize: none;
  }

  .form-submit-button {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }

  .send-icon {
    font-size: 18px;
    margin-right: 6px;
  }

  .status-bar {
    visibility: hidden;
    transition: all 0.24s ease-out;
    transform: translateY(100%);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: inline-block;
    background: #323232;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    padding: 16px 22px;
    border-radius: 3px 3px 0 0;
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;

    &.is-visible {
      visibility: visible;
      transform: none;
    }
  }

  .status-bar.has-error {
    background: #c53929;
  }

  .slide-container {
    height: 78px;
  }

  .about-section {
    transition: all 0.5s ease-out;
    visibility: hidden;
    transform: translate(28px, 0);
    opacity: 0;

    &.is-visible {
      visibility: visible;
      opacity: 1;
      transform: none;
    }
  }

  .thank-you {
    transition: all 0.5s ease-out;
    visibility: hidden;
    opacity: 0;
    max-width: 320px;
    margin: 0 auto;
    color: $blackAlpha84;
    font-size: 14px;
    margin-top: 20px;
    font-weight: 500;
    text-align: center;

    &.is-visible {
      visibility: visible;
      opacity: 1;
    }
  }

  @media screen and (min-width: 480px) {
    .status-bar {
      max-width: 312px;
    }
  }
}
</style>