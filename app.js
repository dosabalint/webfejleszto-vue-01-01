let app = new Vue({
    el: 'main#app',
    data: {
        pageTitle: 'Osztálynapló',
        newStudent: {
            name: '',
            gender: ''
        },
        studentStyle: {
            color: 'white',
            backgroundColor: 'gray'
        },
        studentCollection: [
            {
                name: 'Kata',
                gender: 'lány'
            },
            {
                name: 'Anna',
                gender: 'lány'
            },
            {
                name: 'Panka',
                gender: 'lány'
            },
            {
                name: 'Máté',
                gender: 'fiú'
            },
            {
                name: 'Tomi',
                gender: 'fiú'
            },
            {
                name: 'Andris',
                gender: 'fiú'
            },
            {
                name: 'Csaba',
                gender: 'fiú'
            },
            {
                name: 'Bence',
                gender: 'fiú'
            }
        ]
    },
    methods:{
        AddNewStudent: function(){
            if(!this.newStudent.gender || !this.newStudent.name){
                return;
            }

            this.studentCollection.push(this.newStudent);
            this.newStudent = {};
        }
    }
});
