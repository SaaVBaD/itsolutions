<template>
  <div class="chat">
    <div class="chat__wrapper">
      <div class="chat__greeting">
        <div class="chat__greeting-wrapper" v-if="showGreeting">
          <div>?</div>
          <p>Welcome. How can I help you?</p>
        </div>
        <div class="chat__greeting-online" v-else>
          <div>
            <span>
              Online chat
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <g filter="url(#filter0_dd_1015_209)">
                <circle cx="12.96" cy="12.9609" r="4" fill="#75FF42"/>
              </g>
              <defs>
                <filter id="filter0_dd_1015_209" x="-3.91006e-05" y="0.000937462" width="25.92" height="25.92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="4.48"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.41716 0 0 0 0 0.576923 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1015_209"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="4.48"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow_1015_209" result="effect2_dropShadow_1015_209"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1015_209" result="shape"/>
                </filter>
              </defs>
            </svg>
            </span>
            <p>We're are always here to help you</p>
          </div>
          <img src="@icons/cross.svg" alt="close" @click="resetChat">
        </div>
      </div>

      <div class="chat__inner">
        <div v-if="showGreeting" class="chat__categories">
          <button type="button" @click="selectSection('howToStart')">
            How to start
            <img src="@icons/arrow.svg" alt="arrow">
          </button>
          <button type="button" @click="selectSection('pricing')">
            Pricing
            <img src="@icons/arrow.svg" alt="arrow">
          </button>
          <button type="button" @click="selectSection('onboarding')">
            Onboarding
            <img src="@icons/arrow.svg" alt="arrow">
          </button>
          <button type="button" @click="selectSection('security')">
            Security
            <img src="@icons/arrow.svg" alt="arrow">
          </button>
          <button type="button" @click="askAdditionalQuestion">
            Other question
            <img src="@icons/arrow.svg" alt="arrow">
          </button>
        </div>

        <div v-if="showQuestions" class="chat__questions">
          <div v-for="(question, index) in currentQuestions" :key="index" class="question">
            <button type="button" @click="selectQuestion(question)">
              {{ question.q }}
              <img src="@icons/arrow.svg" alt="arrow">
            </button>
          </div>
        </div>

        <div v-if="showAnswer" class="chat__chat">
          <h6 class="right">
            <img src="@icons/arrow.svg" alt="arrow">
            {{ currentQuestion }}
          </h6>
          <p class="left">{{ currentAnswer }}</p>
          <button class="chat__buttonAny" type="button" @click="askAdditionalQuestion">Any other questions?</button>
        </div>

        <div v-if="messages.length" class="chat__chat">
          <template v-for="(msg, i) in messages" :key="i">
            <p :class="msg.role === 'user' ? 'right' : 'left'">
              {{ msg.text }}
            </p>
          </template>
        </div>
      </div>

      <div class="chat__bottom">
        <form @submit.prevent="handleSubmit" class="chat__bottom-wrapper">
          <input
              type="text"
              placeholder="Your message..."
              v-model="message"
              :disabled="!showFreeQuestion"
          >
          <button type="submit" class="chat__bottom-buttons">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="37" viewBox="0 0 34 37" fill="none">
              <g filter="url(#filter0_dd_1014_194)">
                <path d="M12.2002 12.1992L21.2002 18.1992L13.2002 24.1992" stroke="#0A91C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {isEmail} from "@/core/rules/textFieldRules.js";

const message = ref("");

const botData = {
  howToStart: {
    title: "How to start",
    questions: [
      {
        q: "What’s the next step to apply?",
        a: "Send us your website + basic processing profile (industry, countries, volume). We’ll confirm fit and share the onboarding checklist and timeline."
      },
      {
        q: "Do you support our industry?",
        a: "We work with many online business models, but coverage depends on risk and setup. Share your product/service and flow — we’ll confirm eligibility quickly."
      },
      {
        q: "Which GEOs do you support?",
        a: "Country coverage depends on your company registration, customer geos, and banks/acquirers. Send your target markets — we’ll confirm supported regions and any restrictions."
      }
    ]
  },
  pricing: {
    title: "Pricing",
    questions: [
      {
        q: "What are your pricing plans?",
        a: "Pricing is tailored to each project, since scope and requirements can vary. Our team will be happy to walk you through the options and put together a custom plan that fits your needs. Share your email address, and we’ll reach out to discuss the details."
      },
      {
        q: "Why is Rolling Reserve necessary?",
        a: "The reserve creates a self-funding buffer that protects the processor from merchant insolvency or delayed disputes, allowing higher-risk accounts to remain viable."
      },
      {
        q: "Would it be possible for us to introduce CAP?",
        a: "Yes, we have an option to offer the CAP for our clients. Our team considers each case individually that is why we will request some basic information (volumes, geos etc). This is necessary to make sure that our company isn’t running the risk in case we agree to introduce it."
      }
    ]
  },
  onboarding: {
    title: "Onboarding",
    questions: [
      {
        q: "How long does approval take?",
        a: "Timing depends on document readiness, risk review, and any bank/acquirer checks. Once we have a complete package, we’ll keep you updated at each step."
      },
      {
        q: "Why do you need bank statements?",
        a: "They help verify business activity, settlement flow, and financial consistency. This is a standard part of KYB/underwriting and risk assessment."
      },
      {
        q: "No bank statements — what can I send?",
        a: "We can often review alternatives like proof of funding, prior processing history, or invoices/contracts. Tell us your situation — we’ll suggest acceptable substitutes."
      }
    ]
  },
  security: {
    title: "Security",
    questions: [
      {
        q: "Are you PCI DSS compliant?",
        a: "We follow industry security standards and use secure handling for payment data. Your PCI scope depends on your integration method (hosted vs direct)."
      },
      {
        q: "Do you support 3D Secure?",
        a: "Yes, 3DS is typically available for supported card flows to reduce fraud risk. We’ll recommend the right 3DS strategy based on your market and conversion goals."
      },
      {
        q: "What fraud tools are included?",
        a: "Common tools include rules/velocity checks, device signals, 3DS, and monitoring. We’ll help you configure controls that balance approval rate and risk."
      },
      {
        q: "What’s an acceptable CB ratio?",
        a: "Targets vary by scheme, region, and business model, and limits can change. We’ll share the practical thresholds used in your setup and how to stay below them."
      },
      {
        q: "Would it be possible for us to implement S2S integration?",
        a: "Yes, we mainly work with S2S integration. Server-to-Server is still the cleanest, most controllable, most conversion-friendly and most future-proof architecture for anything that isn’t literally a throwaway MVP landing page."
      }
    ]
  }
};

const freeChatStep = ref(null)
const messages = ref([])

const pushSystem = (text) => {
  messages.value.push({ role: 'system', text })
}

const pushUser = (text) => {
  messages.value.push({ role: 'user', text })
}

const showGreeting = ref(true);
const showQuestions = ref(false);
const showAnswer = ref(false);
const showFreeQuestion = ref(false);
const showEmailPrompt = ref(false);
const showFinalMessage = ref(false);

const currentSectionTitle = ref("");
const currentQuestions = ref([]);
const currentQuestion = ref("");
const currentAnswer = ref("");
const userQuestion = ref("");
const userEmail = ref("");

let selectedSection = "";

const selectSection = (section) => {
  selectedSection = section;
  currentSectionTitle.value = botData[section].title;
  currentQuestions.value = botData[section].questions;
  showGreeting.value = false;
  showQuestions.value = true;
  showAnswer.value = false;
  showFreeQuestion.value = false;
  showEmailPrompt.value = false;
  showFinalMessage.value = false;
};

const selectQuestion = (question) => {
  currentAnswer.value = question.a;
  currentQuestion.value = question.q;
  showQuestions.value = false;
  showAnswer.value = true;
};

const askAdditionalQuestion = () => {
  showGreeting.value = false
  showQuestions.value = false
  showAnswer.value = false
  showFinalMessage.value = false

  showFreeQuestion.value = true
  freeChatStep.value = 'question'

  messages.value = []
  pushSystem('Write your question — the path will reveal itself.')

  message.value = ''
  userQuestion.value = ''
  userEmail.value = ''
};

const handleSubmit = async () => {
  if (!showFreeQuestion.value || !message.value.trim()) return

  if (freeChatStep.value === 'question') {
    pushUser(message.value)
    userQuestion.value = message.value
    message.value = ''

    pushSystem(
        'Your path leads beyond this chat. Share your email, and we’ll contact you to answer your question directly.'
    )

    freeChatStep.value = 'email'
    return
  }

  if (freeChatStep.value === 'email') {
    pushUser(message.value)

    const emailCheck = isEmail(message.value)

    if (emailCheck !== true) {
      pushSystem(
          typeof emailCheck === 'string'
              ? emailCheck
              : 'This email doesn’t look right. Please try again.'
      )

      message.value = ''
      return
    }

    userEmail.value = message.value
    message.value = ''

    await submitEmail()

    pushSystem(
        'Thank you! The shaman has already received the signal. Our reply will be in your inbox.'
    )

    freeChatStep.value = 'done'
    showFreeQuestion.value = false
  }
}

const submitEmail = async () => {
  const data = {
    name: 'Chatbot',
    email: userEmail.value,
    message: userQuestion.value,
  }

  try {
    await fetch('https://payspirits.com/api/contact-us', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error(error)
  }
}

const resetChat = () => {
  showGreeting.value = true
  showQuestions.value = false
  showAnswer.value = false
  showFreeQuestion.value = false
  showFinalMessage.value = false

  freeChatStep.value = null
  messages.value = []

  message.value = ''
  userQuestion.value = ''
  userEmail.value = ''
  currentQuestion.value = ''
  currentAnswer.value = ''
  currentQuestions.value = []
}
</script>

<style scoped lang="scss">
.chat {
  position: fixed;
  bottom: 50px;
  right: 120px;
  z-index: 5;
  width: 396px;
  height: 576px;
  margin: 0 auto;
  border-radius: 26px;
  border: 1px solid #70B5D2;
  box-shadow: 0 0 37.4px 0 rgba(44, 171, 234, 0.60), 0 0 98.6px 15px #000 inset;
  background-color: #011B22;
  background-image: url(@images/chatBg.png);
  background-size: contain;
  background-repeat: no-repeat;

  &__wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &__greeting {
    padding: 25px;

    &-wrapper {
      border-radius: 65px;
      background-color: rgba(0, 106, 147, 0.08);
      border: 1px solid #006A93;
      display: flex;
      align-items: center;

      & div {
        border-radius: 50%;
        background-color: #00131A;
        border: 1px solid #033948;
        box-shadow: 0 0 15.4px 0 rgba(0, 0, 0, 0.25) inset, 0 0 15.4px 0 rgba(0, 0, 0, 0.25) inset;
        width: 50px;
        height: 50px;
        display: grid;
        place-items: center;
        filter: drop-shadow(0 0 39.6px rgba(0, 0, 0, 0.25)) drop-shadow(0 0 10.9px rgba(91, 134, 166, 0.81));

        color: #0A91C4;
        text-align: center;
        text-shadow: 0 0 4.7px #006A93;
        font-family: Inter, sans-serif;
        font-size: 36px;
      }

      & p {
        padding: 10px 15px;
        color: #D5EBF5;
        font-size: 18px;
        letter-spacing: 0.42px;
      }
    }

    &-online {
      border-radius: 65px;
      background-color: rgba(0, 106, 147, 0.08);
      border: 1px solid #006A93;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 25px;

      & div {
        display: flex;
        flex-direction: column;

        & span {
          display: flex;
          align-items: center;
          gap: 7px;

          color: #D5EBF5;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.32px;
        }

        & p {
          color: #FFF;
          font-size: 12px;
          letter-spacing: 0.24px;
        }
      }

      & img {
        cursor: pointer;
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-inline: 25px;
    height: 100%;
    margin-bottom: 110px;
  }

  &__categories {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__questions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__chat {
    display: flex;
    flex-direction: column;
    gap: 11px;

    & h6 {
      border-radius: 65px;
      background-color: rgba(0, 106, 147, 0.08);
      border: 1px solid #006A93;
      filter: drop-shadow(0 4px 9.9px rgba(0, 0, 0, 0.25)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
      backdrop-filter: blur(54px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 25px;

      color: #D5EBF5;
      font-size: 16px;
      letter-spacing: 0.32px;
    }

    & p {
      border-radius: 20px;
      background-color: rgba(0, 106, 147, 0.08);
      border: 1px solid #006A93;
      filter: drop-shadow(0 4px 9.9px rgba(0, 0, 0, 0.25)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
      backdrop-filter: blur(54px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 25px;
      transition: 0.2s;

      color: #D5EBF5;
      font-size: 16px;
      letter-spacing: 0.32px;
    }

    & .right {
      width: 80%;
      margin-inline: auto 0;
    }

    & .left {
      width: 80%;
      margin-inline: 0 auto;
    }
  }

  &__buttonAny {
    margin-top: 20px;
    padding: 10px 25px !important;
    justify-content: center !important;
  }

  &__bottom {
    position: absolute;
    bottom: 0;
    padding: 25px;
    width: 100%;

    &-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      padding-inline: 25px;
      background-color: rgba(0, 106, 147, 0.08);
      border: 1px solid #006A93;
      filter: drop-shadow(0 4px 9.9px rgba(0, 0, 0, 0.25)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
      backdrop-filter: blur(54px);
      border-radius: 65px;
    }

    & input {
      background-color: transparent;
      padding-block: 20px;

      color: #D5EBF5;
      font-size: 16px;
      letter-spacing: 0.32px;
    }

    &-buttons {
      display: flex;
      align-items: center;
      justify-content: center;

      & svg {
        cursor: pointer;
      }
    }
  }
}

.greeting, .questions, .answer, .free-question, .email-prompt, .final-message {
  margin-bottom: 20px;
}

button[type="button"] {
  cursor: pointer;
  width: 100%;
  border-radius: 65px;
  background-color: rgba(0, 106, 147, 0.08);
  border: 1px solid #006A93;
  filter: drop-shadow(0 4px 9.9px rgba(0, 0, 0, 0.25)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(54px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 18px 2px 25px;
  transition: 0.2s;

  text-align: start;
  color: #D5EBF5;
  font-size: 16px;
  letter-spacing: 0.32px;

  @include hover {
    background-color: rgba(0, 106, 147, 0.3);
  }
}

button[type="submit"] {
  background-color: transparent;
}

@media (max-width: 1300px) {
  .chat {
    height: 480px;
    width: 330px;

    &__greeting {
      padding: 15px;

      &-wrapper p {
        padding: 5px;
        font-size: 16px;
      }
    }

    &__inner {
      padding-inline: 15px;
      margin-bottom: 90px;
    }

    &__chat {
      & h6 {
        padding: 5px 15px;
        font-size: 14px;
      }

      & p {
        padding: 10px 15px;
        font-size: 14px;
      }
    }

    &__bottom {
      padding: 15px;
    }
  }

  button[type="button"] {
    font-size: 14px;
  }
}

@media (max-width: 750px) {
  .chat {
    height: 80%;
    width: 80%;
    bottom: 20px;
    right: 20px;
    background-size: cover;

    &__greeting {
      padding: 10px;
    }

    &__inner {
      padding-inline: 10px;
      margin-bottom: 59px;
    }

    &__bottom {
      padding: 10px;

      &-wrapper {
        padding-inline: 10px;
      }

      & input {
        width: 100%;
        padding-block: 7px;
        font-size: 14px;
      }
    }
  }

  button[type="button"] {
    padding: 4px 10px 4px 15px;
    font-size: 14px;

    & img {
      width: 20px;
    }
  }
}
</style>