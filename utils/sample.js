module.exports = (sample, substances) => {
    const convertObjectSampleToArrayKey = Object.entries(sample)

    let checkPreCocaina
    (sample['Benzoilecgonina'] || sample['Norcocaína'] || sample['Cocaetileno']) >= 0.05 ? checkPreCocaina = true : checkPreCocaina = false
    let drugsDetected = []

    convertObjectSampleToArrayKey.forEach(([nameDrug, passingScore]) => {
        let [identifySubstance] = substances.filter(drug => drug.name == nameDrug && passingScore >= drug.passingScore)
        if (identifySubstance && identifySubstance.name == 'Cocaína') {
            if (checkPreCocaina) {
                drugsDetected.push({
                    name: identifySubstance.name,
                    quantityDetected: passingScore
                })
            }
        } else if (identifySubstance) {
            drugsDetected.push({
                name: identifySubstance.name,
                quantityDetected: passingScore
            })
        }
    })

    return drugsDetected
}