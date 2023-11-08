import React from 'react';

const Todo = () => {
    main()
    return (
        <div>
            <h2>Check in your console</h2>
        </div>
    );
}

// Jangan mengubah apapun pada function main
const main = () => {
    console.log("# Get All Users");
    all()

    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics"
    };
    store(newUser)

    console.log("# Edit User: Isfa")
    const editedUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    }
    update(1, editedUser)

    console.log("# Delete User: Nurul");
    destroy(2)
}


// TODO 1 - Buatlah array of object users (5 users)
// Objek memiliki property: name, age, major
// Gunakan const untuk membuat variabel
const users = [
    {
        name: "robi",
        age: 20,
        major: "ips"
      },
      {
        name: "ami",
        age: 20,
        major: "bahas inggris"
      },
      {
        name: "baim",
        age: 23,
        major: "tik"
      },
      {
        name: "ita",
        age: 21,
        major: "matematika"
      },
      {
        name: "abi",
        age: 21,
        major: "biologi"
      }
]

// TODO 2 - Membuat function yang menampilkan semua data users
// Gunakan for/for-of
const all = () => {
    for (const user of users) {
      console.log(`${user.name} - ${user.age}`);
    }
  };

// TODO 3 - Membuat function untuk menambahkan data users
// Gunakan metode push
const store = (user) => {
    if (!users.some((u) => u.name === user.name)) {
        users.push(user);
      }
};

// TODO 4 - Membuat function untuk mengupdate data users
// Ganti data users berdasarkan index pada array
const update = (index, user) => {
    if (users.some((u) => u.name === user.name)) {
        users[index] = user;
      }
}
   

// TODO 5 - Membuat function untuk menghapus data users berdasarkan index
// Gunakan metode splice
const destroy = (index) => {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
        { id: 3, name: "John Smith" },
      ];
    
      // Menghapus data users berdasarkan index
      users.splice(index, 1);
    
      // Menampilkan array data users yang sudah dihapus
      console.log(users);
}

export default Todo;
