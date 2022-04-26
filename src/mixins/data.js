export default {
    data() {
        return {
            key: 'INTERVIEWER_STORAGE'
        }
    },
    computed: {
        questions() {
            return this.getQuestions();
        },
        questionsCount() {
            return Object.keys(this.questions).length;
        }
    },
    methods: {
        randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        parseCSV(str) {
            var arr = [];
            var quote = false;
            let col = 0;
            let c = 0;
            for (let row = col = c = 0; c < str.length; c++) {
                var cc = str[c], nc = str[c + 1];
                arr[row] = arr[row] || [];
                arr[row][col] = arr[row][col] || '';

                if (cc == '"' && quote && nc == '"') {
                    arr[row][col] += cc;
                    ++c;
                    continue;
                }
                if (cc == '"') {
                    quote = !quote;
                    continue;
                }
                if (cc == ',' && !quote) {
                    ++col;
                    continue;
                }
                if (cc == '\n' && !quote) {
                    ++row;
                    col = 0;
                    continue;
                }

                arr[row][col] += cc;
            }
            return arr;
        },
        importCSV(replace = true) {

            const input = this.parseCSV(this.inputCSV);
            let questions = replace ? {} : this.getQuestions();

            for (let i = 0; i < input.length; i++) {
                for (let j = 0; j < input[0].length; j++) {
                    if (0 === i) {
                        questions[input[i][j]] = [];
                    } else if (input[i][j]) {
                        questions[input[0][j]].push(input[i][j]);
                    }
                }
            }

            this.inputCSV = ''
            localStorage.setItem(this.key, JSON.stringify(questions));
            this.$router.push('/question');
        },
        getQuestions() {
            return JSON.parse(localStorage.getItem(this.key)) || [];
        }
    }
}
