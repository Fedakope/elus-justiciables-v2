function Seeds() {
    // cleaning 
    factList = [];
    peopleList = [];
    // seeding
    const balkany = new People("", "Patrick", "Balkany", "", "/components/img/balkany.jpg" )
    const bal1 = new Fact("", "Blanchiment de fraude fiscale", balkany  )
    const bal2 = new Fact("", "Abus de biens sociaux", balkany  )
    balkany.Facts = [bal1, bal2]

    const sarkozy = new People("", "Nicolas", "Sarkozy", "", "/components/img/sarkozy.jpg" )
    const sar1 = new Fact("", "Blanchiment de fraude fiscale", sarkozy  )
    sarkozy.Facts = sar1

    const cahuzac = new People("", "Jerôme", "Cahuzac", "", "/components/img/cahuzac.jpg" )
    const cah1 = new Fact("", "Phobie Administrative", cahuzac)
    cahuzac.Facts = cah1
}

