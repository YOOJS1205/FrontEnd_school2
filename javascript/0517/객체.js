// const me = {
//     name : '한재현',
//     address : '제주도 제주시 인다 1길',
//     phoneNum : '010-8001-6536',
//     canWalk : function(){
//         console.log('재현이가 걷는다.');
//     },
//     teaching : function(student){
//         student.levelUp();
//     }
// }

const student = {
    level: 1,
    levelUp : function(){
        // this는 함수를 호출한 객체를 가리킨다.
        this.level++;
    }
}

const me = {
    name: '유준상',
    contact: {
        github: 'https://github.com/YOOJS1205',
        instagram: '@98_12.05',
        email: 'junsang8921@gmail.com'
    },
    시러: function(study, subjectName) {
        study.kill(subjectName);
    }
}

const study = {
    subject: ['HTML', 'CSS', 'JavaScript', 'React'],
    kill: function(subjectName) {
        console.log('안 해.');
        for (let i = 0; i < this.subject.length; i++) {
            if (subjectName === this.subject[i]) {
                this.subject.splice(i, 1);
            }
        }
    }
}


me.시러();
console.log(study);

// me.teaching(student);