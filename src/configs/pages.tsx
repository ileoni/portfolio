export default {
    home: {
        main: {
            title: <span>Ola, <br /> eu sou <span className="font-bold">Leoni</span></span>,
            subtitle: "Desenvolvedor de software",
        },
        about: {
            left: {
                title: "Sobre min",
                paragraph: <span>
                    Meu nome é Igor <b>Leoni</b> <br />
                    Sou <b>Desenvolvedor</b> com experiência em <b>back-end</b> e <b>fullstack</b>, 
                    atuando em projetos web, Tenho formação <b>técnica em Informática 
                    (QI Faculdades)</b> e <b>graduação em Análise e Desenvolvimento de 
                    Sistemas (Unisinos – trancada)</b>.
                </span>
            },
            right: {
                title: "Minhas experiencias profissionais",
                paragraph: <span>
                    Já atuei em empresas como <b>Medialine</b>, <b>MULTTI</b> e <b>Fundação CanoasTec</b>, 
                    desenvolvendo soluções web integradas a APIs.
                </span>
            }
        },
        skill: {
            title: "Tecnologias que uso",
            row: {
                language: {
                    title: "Isso inclui, mas não está limitado às Linguagens que  utilizo",
                    link: {
                        javascript: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
                        typecript: "https://www.typescriptlang.org/",
                        php: "https://www.php.net/",
                    }
                },
                frontend: {
                    title: "Isso inclui, mas não está limitado às tecnologias que uso no Front-end",
                    link: {
                        react: "https://react.dev/",
                        tailwindcss: "https://tailwindcss.com/",
                        css: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
                        html: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
                    }
                },
                backend: {
                    title: "Isso inclui, mas não está limitado às tecnologias que uso no Back-end",
                    link: {
                        express: "https://expressjs.com/",
                        node: "https://nodejs.org/pt",
                        laravel: "https://laravel.com/",
                    }
                },
                others: {
                    title: "Outros",
                    link: {
                        npm: "https://www.npmjs.com/",
                        redis: "https://redis.io/",
                        mysql: "https://www.mysql.com/",
                        vite: "https://vite.dev/",
                        github: "https://github.com/",
                    }
                }
            }
        }
    },
    projects: {
        title: "Projetos",
        page: {
            pokedex: {
                title: "Pokédex",
                description: <span>
                    O projeto <b>Pokédex</b> foi desenvolvido para colocar em prática 
                    conhecimentos de <b>Design UX/UI</b> e <b>Desenvolvimento Front-end</b>. A interface 
                    foi prototipada no <b>Figma</b> e a aplicação web foi construída com <b>React</b>, 
                    consumindo dados da <b>PokéAPI</b>.
                </span>,
                base: [
                    "FCF300", "FCF529", "FDF752", "FDF97A", "FEFBA3", "FEFDCC"
                ],
                primaries: [
                    "FCF300", "5EB8E6", "ED4051"
                ],
                secondary: [
                    "212529", "EAEAEA", "893168"
                ],
                types: [
                    "CAF0F8", "9D0208", "7B2CBF", "FFC300", "7F4F24", "A68A64",
                    "FF4D6D", "48CAE4", "80B918", "560BAD", "E3D0D8", "212529",
                    "3C096C", "FFB3C1", "00B4D8", "E7E6F7", "DC2F02", "2B9348"
                ],
            },
            portfolio: {
                title: "Portfólio",
                description: <span>
                    Bem-vindo(a) ao meu portfólio! Este espaço foi criado para 
                    contar um pouco da minha história, compartilhar minha evolução e 
                    apresentar os projetos nos quais tenho trabalhado. Explore meus 
                    trabalhos em <b>desenvolvimento web</b> e <b>design de interface (UX/UI)</b> e 
                    sinta-se à vontade para entrar em contato através das 
                    minhas redes. Vamos conversar!
                </span>,
                base: [
                    "333333", "4F4F4F", "828282", "BDBDBD", "F2F2F2"
                ]
            }
        },
        link: {
            portfolio: {
                slug: "portfolio",
                link: {
                    figma: "https://www.figma.com/design/dMbd4sQbXhXRYOWGnUzA4B/Portf%C3%B3lio?t=SWHrY8EmEJMX5tBs-1",
                    github: ""
                }
            },
            pokedex: {
                slug: "pokedex",
                link: {
                    figma: "https://www.figma.com/design/brzk4vE9zrCK6aQw5VNV8S/Pokemon?node-id=0-1&p=f",
                    github: "https://ileoni.github.io/react-pokeapi/"
                }
            }
        }
    }
}