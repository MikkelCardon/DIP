let mountains = [
    {"name": "Kilimanjaro", "height":5895, "place":"Tanzania"},
    {"name": "Everest", "height":8848, "place":"Nepal"},
    {"name": "Mount fuji", "height":3776, "place":"Japan"},
    {"name": "Vaalserberg", "height":323, "place":"Netherlands"}
]

let table = document.querySelector("table");
for (const mountain of mountains) {
    let newRow = document.createElement("tr");

    let nameTd = document.createElement("td");
    nameTd.textContent = mountain.name;

    let heightTd = document.createElement("td");
    heightTd.textContent = mountain.height;

    let placeTd = document.createElement("td");
    placeTd.textContent = mountain.place;

    newRow.append(nameTd, heightTd, placeTd)

    table.append(newRow)
}