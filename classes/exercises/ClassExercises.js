// Define your Book class here:
class Book {
    constructor(title, author, year, ISBN, pages, checkOut, discarded){
        this.title = title
        this.author = author
        this.year = year
        this.ISBN = ISBN
        this.pages = pages
        this.checkOut = checkOut
        this.discarded = discarded
    }
    checkCount(read=1) {
        this.checkOut += read
        }
    }


// Define your Manual and Novel classes here:

    class Manual extends Book {
        constructor(title, author, date, ISBN, pages, checkOut, discarded) {
            super(title, author, date, ISBN, pages, checkOut, discarded);
            }
        dispose(currentYear) {
            if (currentYear - this.year > 5) {
                console.log('Manual out of date---DISCARD')
                this.discarded = "Yes"
            } //end if
        }// end function
    }// constructor


    class Novel extends Book {
        constructor(title, author, date, ISBN, pages, checkOut, discarded) {
            super(title, author, date, ISBN, pages, checkOut, discarded)
            }
            dispose() {
                if(this.checkOut > 100) {
                    console.log(`'${this.checkOut}' exceeds maxium checkouts...DISCARD`)
                    this.discarded = "Yes"
                } // end if
            }  //end function

        } // end constructor

// Declare the objects for exercises 2 and 3 here:

let firstManual = new Manual("Top Secret Shuttle Building Manual", "Redacted",2013, "000000000000", 1147, 1, "No")
console.log(firstManual)
firstManual.dispose(2024)
console.log(`Manual discard is '${firstManual.discarded}'`)
let firstNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "111111111111",432, 32, "No")
console.log(firstNovel)

// Code exercises 4 & 5 here:
firstNovel.checkCount(5)
console.log(`Current checkout count is ${firstNovel.checkOut}`)
firstNovel.dispose()
console.log(`Novel discard is '${firstNovel.discarded}'`)