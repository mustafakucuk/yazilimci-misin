var app = new Vue({
  el: "#app",
  data: {
    questions: [
      {
        q: "GitHub hesabın var mı?",
        no: false,
        yes: {
          q: "Twitter hesabın var mı?",
          no: false,
          yes: {
            q: "Hiç Vim kullandın mı?",
            no: false,
            yes: {
              q: "Hangi dilde geliştirme yapıyorsun?",
              noText: "PHP",
              yesText: "Diğer Diller",
              no: false,
              yes: {
                q: "Frontend mi Backend mi?",
                noText: "Backend",
                yesText: "Frontend",
                no: false,
                yes: {
                  q: "Maaşınızın para birimi nedir?",
                  noText: "TL",
                  yesText: "$€",
                  no: false,
                  yes: {
                    q: "Cinsiyetiniz nedir?",
                    noText: "Kadın",
                    yesText: "Erkek",
                    no: false,
                    yes: {
                        q: 'Bonus Soru: Karkas Çiftliğinden ürün paketi geldi mi?',
                        no: false,
                        yes: 'Hmm, testi geçtin ama hala yazılımcılıktan aforoz edilme ihtimaliniz var, takipte kal!'
                    }
                  },
                },
              },
            },
          },
        },
      },
    ],
    currentQuestionIndex: 0,
    currentQuestionData: {},
  },
  computed: {
    currentQuestion: function () {
      return this.currentQuestionData;
    },
  },
  methods: {
    submitAnswer: function (answer) {
      const getAnswerData = this.currentQuestion[answer];
      let errorMessage;

      if (getAnswerData === false) {
        errorMessage = "Bizimle değilsin!";
      } else if (!(getAnswerData instanceof Object)) {
        errorMessage = getAnswerData;
      } else {
        this.currentQuestionData = getAnswerData;
      }

      if (errorMessage) {
        Swal.fire({
          title: errorMessage,
          icon: "error",
        });
      }

      return true;
    },
  },
  mounted: function () {
    this.currentQuestionData = this.questions[0];
  },
});
