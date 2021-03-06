import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {

    constructor() { }
    createDb() {
        const patients = [
            {
                id: 1,
                name: "Tobby",
                age: 4,
                breed: "Cocker Spaniel",
                picture: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUYGRUYGBgZGBgVGBEYGBgYGBgZGhgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDQ0NjQ0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADcQAAIBAwMCBAQEBgEFAQAAAAECAAMEERIhMQVBIlFhcQYygZETscHwFEJSYqHRciMzQ+HxNP/EABkBAAIDAQAAAAAAAAAAAAAAAAIDAAEEBf/EACURAAMAAgICAgMBAQEBAAAAAAABAgMRBCESMSJBEzJRFHFhBf/aAAwDAQACEQMRAD8Az9MlXIHEYLf4wDLL+0KvqxFPU6ZDBpwpUZdb+zpU82NPX0ML6+Cgd55a322dJi6ggYjVNXY2qaRtAzVGGfHWy8OGs78qehdbXTuflIEd06uBiWimoGwgVYEGc+siydJaNkYfx1vey2rc4g9teanwZTUJMCCOHBA4h48ctNMPLTS2jWmoANoCUySfOLzf7YMNtroYiPxVPZeOppbCkfSIJdUwwJlxbXsJT1Pp7vTIRsHG0qNeS29AOW2xOlNMkZGYvuGZXAXjPaB2nR7lKmXOV7+vrNCLQtgAbnn0nRrxh/smjPM212tF1iPDqY7cxFc/FwFXQo8OcZ9Y/vU0JozzMfcfDwd8rsM5MvjY8VuqyevoPk5bhSp9/Zu7C+XGc8wx6wPeZD8BkUAHiW0b9lGWMz1xE35Qyp5K38ujYUmGIk6pTBeD2/WAdgd51VyxzKxce4rZWTlY9aZYH08fWTF5BiYPUmycCpfL2c556mvi+g9rrfMa293kbzJF8HcxnbPkDBgXwk0OXPrfaHjsDKWQGL2c+cprVnA2inw3K3sOObt60e36DtF70XA2Ekl05bBE0Fqi43hPJWGdexi4v5n5PoxTU62oeHaNqPTnbBxvNUtsvkITTogTPk5zfpaNePDONaT2ZHqvTXNI6ecTE9M6bWFUEqRvuTPsddARiBC2QNpwNXMPB/8AQqIc63sDJx4tqn0BUbRtI27Tof8AjY28p0z/AJqHeMFF4uRuIg6lTDAYEMPVBoUnvzFb3yl8DjM14cdz9eheXNja1v2X2nTg2MzQW1MKMZgdu4AGJa2TxE5qqnphylK+IcgBkLpRBGudAyxwPWDHqiP8rAxM4bb2gVnj7CwgEpq3CopY4wBI0qhYbQXqfTyyEMeRNEQtpWF+ZUn49iJOpCrUIXgGP6FPHJmd6F0nQ5OZpq1DbVnAE6eXDFTqWcdZrx29htrWC4EdLUGBMTZ3qO5UNkiNXumG2ZyuRxKVG3HylS+Q6rsD5QKiwU+pi+v1DElZ1cnMUsNTPZq/ND6TCryy1eI8ymlbACHPV4EGuTttLiqepZVtd1/AZ6GTjEovOhM6849o4sgOTzCK1YAZ7Q3yLitSKx4ZteVIxlj8K1EctqJEaPTKbGae3cMsBvaIbMbj511fzF5+JDluVpoRNDbFEPOPrBWTtIU8gzo8heWP4vRy8Ola2hh1DoauPCd/SR6b0YouCczyj1ArnJjGyvdc5Ty54Wt9HYeHDX0tgFe2Kn0nmhSOxlfxNWdUbQMnB4md+F61ZmZXz9ZpXnlxedNdCsOOMWXWn2OKoCnMFfqJ1YB2En1FGVvSL1oFjDxxNLbNObL4LSHFDrQXYmH0etgzHV7Ni3pL8aQJb4mG/vsw3yM0966NpQ6kpySeIrFyS+v1iqm5xmH2x8MuOFENtPe+jNfKukt/QbUvdzOixqpnRf8AjY//AFiKm5xv2kre1LtmQQ7Quyq6Z0r3MvxMUdvsbW6lRGFtWzt3iT+JbPEc2KAbnkzj5p0ts7PHtUtL6M/8eB9Chc4J3x5RD8JWtRnOM6R55n0aparV+YeESNraLT+QAZ8o7FzVjw/jS7Cvgzd+TfX8B7GmUO44kLy41nHaNgiuMHb1iO8phHIznyg48izXtrtIy5MdcedL1sqtKI1gx/e09dJlUbkRZZ08kRtUulUEDsIvlVXnKn6D4mq26ML0H4fqJX1N8ozNbdUwDkSK3f8AN5yipcahD88mbKnX/A804oxNSL7xMyy0JAk13OI8tOhaxqZwiD0z9pveNNaZypqt/EH6fReo2FGTNNY9KWmQzsC39OxlNsETwUwfVu5hDUG75A/OScGOWnrs1T5pfJklsqRZiEAJxvvpye4ER9f6NV05okP/AG5AP085pB8owe2PoDBqqOoJG4hXhxvTaGRdL0zI9LrVVUh0dSvOoHadcV2znM0S9QO6nceR7+kD6j05GQvT3815IMzLiysnkvRM2SnGhGu88dZOku+DLkTMZmyzPTMOLFVvoXGnqYAR7a2wRYqrjQciTp9RJIye8wZJeX9ekdCN4VuvY6aiCNxAxaKGyoxJXN+qgYMCpXuDk8GIjFkaejR+eE1tht1SVkOeRFNrTAzK36gS7AHaQZyBkzZi49zD2Z83Ih2tBdW3GJm+rvpMfWtznmK+v0NW8LA3N6obnuax7kG6V1FWBGY9tsMu0x1rZlWJhtt1BkbE2VGm3DMTlVK2tGlNtPYEvUfWewPy1/AP83/pnkaFW74OZRSpbS9aZm2pTXZlT0w43JPAEY2tx4dRMWWiZ5ntyMbAzNm401PXRow8isdb9mst6mKWfOD1ao0Bs/LzAbS48AQnJ2jc2ymmV4LCcSpUV3/TtY8juPiKE6sh1Ln2gLZYk87we3+DqoqFtZ05Jx7xzV6e1PAPHnOlheCK1D22c3lfmc/NdFdi5Agt5cEEjPMO04ET3Q8U0PDNVtoxzkqVpM8/iiSB5Qui20WqMGP+gWH49QIdkG7EeXlGrHMrop1Vvs7plqXcY++CZorqqdS00zheeN2P5xylGlTQhAAFG+Oc+p7mZ+3uVpK1d2A5OtsYVe5Ge/A+sp+9GvDClNjFKy0dmUmoRkheAPX9meLfElSDlHyMHsRvMZcfFaO6MhdlYsqs+wbzx3Bzjkd4ws3dtH/IscduYNTUvsfPjS2jVG6x6HTx9TmC0epEYxgswJGrOAPLaVvRbQCf5gZl7t2p6WLYKah7jG0qvJsuUtGpej/EZZdKuOwbZv8AG0Gtro03IcYHDAzA2PxnVphnCo6l8Oh1hyCM6t104+vlNnTu0uaOsHGQCM7MM8A+o4+ka4qUti1U1tIZXPQFfNRHxtnT5/WJwShKnY++Y86B1NaqFA3jQY+o7GZ34iTS+obBh/kciZs+BZEtATX4XtI8ruDEl0+DLUrmDXJyYODBU12Vn5KyTpFyMWIGYXdNgewi+2fxSd5U2M2uezDsGpVt4xJJES0VJaNEY4kyba6LlpUtl9M4g9y2ZJ32lDuMTAoars6nnPj0V3FYKIL+EG3kLt5ZbvtNdY9SnJmx5u35Fuiezz8WexXhX8G/mkKsqG0uqUZ1FwB9JX/E5OJsS2c4HZ9JMjR8ZxmeX/GRL+lIq4ZjC312QcWiCmuojLdp5b35Dln222ElcX66QFxmDpbBzljvMN8SK22+2aY5VRpL0jS9MuvxKZYeZxJULpHDI/zDzmaW6eh4V+XMCa+Yvr7mc7/Bfm9dL6ZrfLlwt+/sPu6uGKjtFtXecKhLepnlwCrYInWx/FJU+znVPb0uipqc0nQKhp0mfOCzAf6ETigdOrEfdIojQjt8qanx5sWwo+4H2h5FpB4Fuhp8Q3Ro2wXPiIy3qf8AUzSUf4u2FM5JKjABxnnP5CWfEFZ6qaiCQTsOJX8Mg/gMuQHRmCkf27j6YMGX9m1rS0ZtPhGsj57KQfEuDzxzvPovRLFlTLcnYefvL7auHTxfNt+/vC7d+AB6f/YTp17BSUppDCvb4RASBjtkbmZb4k6KXyy/bI59JqbuqNXbZR/7gF1VYLlRlc7jk48xKr9ui4fR8+pfBAPiJyu2dRPPqO/1ji5tRTplV3VQQSPPY/v3j+6yV8G+CCQOR6iK+prptyCcZz6ZJziR1Vey0pn0hD8NXJWqHU4LHcE4yCY6+LGyurGDqGdvMH/UzXTgoRQ2zYyrD/P095qdOugUfyyCDkA9iPL2gt6oq58oejGs5EqFQmEum5U8jaUFMGGq70c0rWrhpdXq6hIvRyMypVxCVbI1osoPiFJWECKzxYZAi4fyi1qp1Qt3gdRcmW4nWybZZVORI037TxxILItELiZ0pyZ0LZBiWYjaRpow5k6NYQtGBlqUVsHqbiVoe0NfGIruiQciRyRdhhyJbTuGHeBW1XWQO8aXfSn0ZX5sTNkyxD1T9jceG8n6rZVUuyeZ1GnmC9L6bW/8gxGjppEFVLrUvYdYqhfJaCum0V15xxDrnpyu4btEdjeYfEZV+p4ZQJzc/wCSc3lJtweFYtUG3iDTpAHkIZZ2TGmEBwi/Mf6mzk/QcCD2VL8Vw2dgfuY9uXVFGo6UXA9WPkvmT5/rH8Z3Sbt+yXMS9SjP3dJijK4wirlcbbDj74/zMv8AD9dlvTQfwq/jJJ4IXcD7TT9auWYqz+FNJLL5ashR9sTJ3lZUuqNdhlQ5B5zhlKjj+7E2Y17QNN6TNza3BesEC4RfpnHcmMP49KTZbxH+ULxj1gPTG1JrGf6cd1/qBxxMH8Y9Ur0apCjwP4kI7juPpvGYZTrTF5aanaPoF18QZwdAx6kZl1h1JGJIyDsNHv8AmJ8abrVUjKt4j2J2/wAzT/BVWs7mo5wqAgDI3Y42HsP0jcmOfF19ioutpG3vKbitqQ7H17dwYn+PK2mkg4LcdgWG258t+JoUYFC+flyxPBAxk58ph/iiq1f+HDkHDs+AeF2C+/Ezz7NDLra18KDG4UffAP79o6sUAJQ8Hb2yNx+/KSsKAAR2+U7fUZ/TedcoWc6DuFz9VOf37Rdexia1oU9a6QUbVkYbcbjMR19puGvVejllVh3B5B4OPLcTD9RADnGcZ7x8aa0c7LPjRJD4ZQ8KT5IGzYOJfikLOMod8S9jBq8PRCL1cyaCDoN4ZTWW/RCqoJACXVZUplJEO0zpZqE6HpECv4TyldV2UQ1HkatMGWQTreMTuYTrBEHubbByJX+LiRsg06DpWqc/SbezqKc78T51RffIO8Ko9aakWJOQZyuZxKyt1Ju4vLWJeLRtruosznUKuMyuy6qam/adeDUJXE41Y63ROXyVkWkJxWOZeLgnmCuMGSp8zdkxyzHNVPo23wfdMS/cKNs8am9PYGOaz4Znfchgq6t8YzwPIY4HORPOjWK0KAH85xqPm7foBtKesONPqASO++dj+USkl0jdCfj8vYi+J7vCBQcnO+edR3yfp27YEyt1cEpgFckYGrfHrNVfWOTrqeFFXO/diAAPU+kzFzTGo5Xw4UAeWM5/SHPvYT9aNl8J3WaTIxDNs2eASBg4+mmDfEiLUQ02XO+Rx4T6H7zN9M6i4bYjVwPIYJ/T84VdX9V9egJlQCcA8E4P79YyZfltC2vJaM5V6Sytjt29Zsfh86UCYAUfryfWY2tZ13YMzHI45AHtNB02zrhHd3bCKSBxkj1xzjMbculpAxDT2bO+vT+CUVhqcYGQMYG7Z9Mecx13UR7gMreJQFIAAUAbGUV7pwhYsdeMDkbH178doN8O02cu3oMem4/U/wCInw0FvZ9De5CoE7ldQ+h0k/l94Bb3Whx/VpDf+vtIOCzUyDnSjL7jw/kVI+0FujqrDTnddhttt553iX7HL1oaUnUOy8A5IHIKtz9m/OZnrFUayuNwd45pbuM/ysPswwYi62v/AFnPbbH2jMf7GbkrpMhQq7Yg1U+KRUyFRo7RkLGaVuZW1SeBsy9ELEEIzgQXOJLVmWQ6o8pLyLtIZk0Qt1zpVmdCIPFqCRetEqXRl/4pIzITQRWbMglkDBWqmSp1m85RC9rQpuJGpaltoypHIGZ7VXB2lOeyErC2CLgcwl2wDKrR4Jf3QziA5ICVFyxhNjR8aeWpc/cQVKwzNf8ACtiGzWbGlCCB/U3I+0j1pthQm6SQ/e4bOkjwod/73IyF9AO/tAL668el0LMSDjICjTuBjyGM++JV1W6ZAtMHxnLNjkM52+o2+0Eq1XevpHdCc9gMjUx9NpmR0gC8d6jgb5ZwMkk4GRnA4G0UX7rkqv8AL38zvmNat6qB9B1MoYB8DTqbbI8+cfSZ/fJ8tIBzySxO8OSmA2rNryudz9puOkBCg0qPxdwV4BXPG3tMd0NssfDkZzk9prrNQuGBwec/rG7aYtrxZC56igYg03BU7+EN9t4ZbK9fxEFaKbkEY1EefaQF6Gbxld+42zKL+92KB/CeVBG/vGbeiPM2vFgPXqiv8vhVQAB7bDiD9ErrTRsDJIIHrk7f5/KDXxGCdWBj1yPMGV2j4QjG67jPJHb9+kU30VK3RrOiuzDV/cffz2lV5dqKodVAZWKnB8J+n1hvTwFRQNjvkepUEfUGIhq1sSu+tjjsTt/qIQ4amoDUYDudvYjj7xb1ikQ5BGDzv3EK6Uh/ELt2GfuYT8S3KsFO2QTjzx/qMxP5COQviZVhKqnEJc5g9WaDEBuYRajMrZJ7bHSYWiBFZJWhlz1MwcjeTRCqpzIiXMkjok0Qr0zoRpnQtEABQbkyzXtiMSm0XPTwTK0RMiGhFBhneUKJC5qYG0miDX+OGRDWOoZEytF496TVJGDKIHUh6wK9Rec7zr2rpOMxfXfMBkORt59M6DblbZCdix1ke5wM/QT5jTaaHp/XqiKEHiHbOc/eLyJudDMNKa2xz1S1KvqJOCSSPPIOBn2ECqCo6bbB2XURtqGdgT/SN8LxGNO5qVVAZEJ251duDzzv/meGm6JoKgDUGU9seLb/ADEJm/2Zm4Qq5TfwjPuTxAL5gq5/mxp9vUzV1nVgc7vwf/veY/qSkErGSgaYrtqhU5Un9JprfqxK5x2G3tzM/TozSdGsdQAjHXYM1r2Zy/u2dwoJwM8Ej5jnBkaVUpUOpids898zV33wkWf8RGC5xlWBI2GNsHaLL34Tqgl9Sn0AI2x7xyf99AU5ct67b6/4BLd/iBg3yljk9wp/OMrLScsGDE8DbG3A/L7RQtk6+AHnniM7G20gbYO3H72ibSfoKWkktd/Y86XdEq4bsder1xnPvC6LgAd9zv6gNn/GPvFNpRfdMcnf1weJbc36KQucsOdPAPHPtE+LfoZVzK2x1a3C/ib7Bts+R2IiP4mY69uANpca2Rkc8/aA3LliS25hxLT2Y8mbyWgJK+0gz5kK1PEqLTQnsSWh5dTGYCWl1u8NEDdErZcQhGyIPcSEOJleqVa5EvJohf8AiToLqnQiDGvU0iLDUycy2pWDnnaepSEEiKcmePTzzCwiieO6jiQguaiRxGHSqmGi6renPEHS6YNkSaIaS+TUcxYj7kGTTqIK78wH8TJgtEGKU/KNekW2W1HgSqwp+DeNLchRiIyPrQ/BPk9v6H3TBneEdWOlQPOD2gIVPXeedVfJ9omUbGxXQTc+cU9Ttc4bEe2y7kzr62AAHf8AZjG9AezMW9p6TSdHpBQM+cXMmDj7RjZnI0j6S59g16NGiZAlFzQwOO0KsdwPaG16OV4mnx2jN5dnzC5Ua29CYO9XJxDes2pFd8d4GKOIhrXRoT32GWV0wcHUTjzgPV0xVJHB3+8utl8X1hHWrTBVvNfyhS+xeVfECtbnsYQ+8VsCDCKdaSp72jMTqLBqlPaEVH7yIqKRClEAHE8QkCX1mAgVa42wI1EC7S83wYfUORM2jYOYztbvOxk0TRGod54Gkbs4MpR5RC/M6RxOl7RAFXIlq3LDvKsTgJbLLDct5wi2qbwQJDLZZTKK7qlk7CdSscwsAQhDKJsBq9PIGRA6KEMAfOaJGi/qNDDKwHeTZEx3Z/LLqeWYL5kSi32Qe0JsBqqIB5iZKe2bca8ZNSVCkY/lA/KBVPEfeHVk3x5yhkwSew/eItDdnUaeNgPeB3YLEsTt+8ARnYIWBLbLyfMwS/uqfAzt3/1DB+xLcKcj2jDomPxADwYGa6sRgbDb3jHpaAP+UJdA12bO2tQMQw0xjEotnyvrieo57zYn0ZDDfEFHFcHtjeJb5AG24mt63aa2JHaZetRYnB9pke9s1zrSKba2OoH1mi6xaBrcNyydxAkKptjeS6lcH8PC8Md8eUqH8isi+LMv+Dmd/D4jEUdpW1Ix6MLYsrCDIoBjKvSgFSnLImUXOO0CNImMFpZhlCyLcLmRVosQmmROVCN4/fpznYJKD04r80LyLFtdywg+4jQ0xmQq22eJEygLWZ0t/BM6X0QHqSKtiTcjtKzLLCkcQijFqmF2bb4lMoN/DzL1onElSEIHEopldJJOtSzj0kqYlrDO0CnpB458qRwbaS6e5FRfeQCTkOGB8jM5tN/QQY1Hyis1dT4AyM8ecNsGLpudsQBW0sVTdu+O31gpE2F3NxoUl8L5LMh1G6LccR3UtgCXqnJ8u8SXq68kLhewA5hoon0u1Zzq8iODNJZW+DMba1HQ7EgA577zV2nUhr34yP8AMtaKezRWVdkYeUPavnOOYsq3KoV1fzce+JBrzCEjnf8AYjvJLoSob7O6v1BKakcse0xprs7aoTXR3qEE7lcgfoJNbTSMnn1iap0x8ypRUlAtkkwPqdQ00BztmH2xLZ2if4rucUwgOTneXC+QGR/EHbr64g7dZJ4EzgQkxxaWZC5M0NIyaLXvHMoe5PeXMkEqUjmVogTRrxzbdaVFxpzFlvbZWDvSwZTSIO2+ICNwsWXXVS58ovqvKGMtSiDOgQTzGCUhM9TciHW/UtJ3l6KYx/hxOkhfJPZOyuzMCeNOnQvsM8hNn806dI/RBzT4lyzp0FgsmkOo8T2dF5PQ7B7IJyZQeZ7OiDWzb2X/AOf6fpFXTf555OlL2V9FVxuTnzld58p/4j8506EUL8eL6D9J7b/91P8AkJ06Win6ND1I/wDUT/g/6QlPlX2E6dI/ZS9IV3H/AH19pZf8fSdOlL2EwPpnH0MyvxJ849v1M6dGR+wrL+ostPmEcPwJ06OZnK2lQ5nTpChsvyfSKbjvOnSiC94O06dDIWLxKzOnSFnk6dOkLP/Z",
                contactPhone: "3017869734",
                contactPerson: "Sebastian Cordero",
                createdAt: new Date(),
                visits: [
                    {
                        date: new Date("2021-11-17T05:00:00.000Z"),
                        doctor: { id: 3, name: 'John Doe', phone: '1234567890', schedule: ['Wednesday'], createdAt: '2021-11-10T05:12:34.232Z' },
                        medicationProvided: "The treatment of dogs suffering from food poisoning depends on the severity of their symptoms. There are those who require serum and antibiotics and others who fast for a few days and only drink water until the vomiting and diarrhea subside.",
                        reason: "Stomach intoxication"
                    }
                ]
            },
            {
                id: 2,
                name: "Tommy",
                age: 4,
                breed: "Pincher",
                picture: "https://www.feelcats.com/wp-content/uploads/2019/07/pincher-mini-1.jpg",
                contactPhone: "3017869734",
                contactPerson: "Valeria Vanegas",
                createdAt: new Date(),
                visits: [
                    {
                        date: new Date("2021-11-17T05:00:00.000Z"),
                        doctor: {
                            "id": 2,
                            "name": "Pepito Juarez",
                            "phone": "1234567890",
                            "schedule": [
                                "Saturday",
                                "Tuesday",
                                "Monday",
                                "Friday"
                            ],
                            "createdAt": "2021-11-10T05:23:10.116Z"
                        },
                        medicationProvided: "The treatment of dogs suffering from food poisoning depends on the severity of their symptoms. There are those who require serum and antibiotics and others who fast for a few days and only drink water until the vomiting and diarrhea subside.",
                        reason: "Paw hurt"
                    },
                    {
                        "date": "2021-11-20T05:00:00.000Z",
                        "reason": "Infection in one eye",
                        "medicationProvided": "Conjunctivitis is an infection or inflammation of the conjunctiva. A person may get the infection in one eye or both. Types of conjunctivitis include: Viral: Affects adults more than children and is the most common type of conjunctivitis.",
                        "doctor": {
                            "id": 2,
                            "name": "Pepito Juarez",
                            "phone": "1234567890",
                            "schedule": [
                                "Saturday",
                                "Tuesday",
                                "Monday",
                                "Friday"
                            ],
                            "createdAt": "2021-11-10T05:32:46.418Z"
                        }
                    }
                ]
            }
        ];
        const doctors = [
            {
                id: 1,
                name: "Juan Perez",
                phone: "31223123213",
                schedule: ["Monday", "Tuesday", "Thursday", "Sunday"],
                createdAt: new Date()
            },
            {
                id: 2,
                name: "Pepito Juarez",
                phone: "1234567890",
                schedule: ["Saturday", "Tuesday", "Monday", "Friday"],
                createdAt: new Date()
            },
            {
                id: 3,
                name: "John Doe",
                phone: "1234567890",
                schedule: ["Wednesday"],
                createdAt: new Date()
            }
        ];
        return { patients, doctors }
    }
}
