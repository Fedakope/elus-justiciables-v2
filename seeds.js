function Seeds() {
    const balkany = new People("", "Patrick", "Balkany", "", "pic_url" )
    const bal1 = new Fact("", "Blanchiment de fraude fiscale", balkany  )
    const bal2 = new Fact("", "Abus de biens sociaux", balkany  )
    balkany.Facts = [bal1, bal2]

    const sarkozy = new People("", "Nicolas", "Sarkozy", "", "pic_url" )
    const sar1 = new Fact("", "Blanchiment de fraude fiscale", sarkozy  )
    sarkozy.Facts = sar1

    const cahuzac = new People("", "Jerôme", "Cahuzac", "", "pic_url" )
    const cah1 = new Fact("", "Phobie Administrative", cahuzac)
    cahuzac.Facts = cah1
}

