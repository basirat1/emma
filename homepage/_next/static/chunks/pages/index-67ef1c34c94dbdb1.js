(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        7314: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return i(2062)
            }])
        },
        6471: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return c
                }
            });
            var n = i(2322),
                r = i(2784),
                a = i(3301),
                l = i(5803),
                o = i(6794);
            let s = (0, o.ZP)("video", {});
            class d extends r.Component {
                componentDidMount() {
                    let e = this.ref.current;
                    if (e.setAttribute("playsinline", "true"), e.setAttribute("defaultMuted", "true"), this.timeout = setTimeout(() => {
                            this.setState({
                                canPlay: !0
                            })
                        }, this.randomDelayTime), (0, l.Z)()) {
                        let e = parseInt(a.Z.version);
                        this.props.objectFitFill && (this.objectFillTimeout = setTimeout(() => {
                            this.setState({
                                objectFillOverride: !0
                            })
                        }, 0)), this.setState({
                            browserIsSafari: !0,
                            safariVersion: e
                        })
                    }
                }
                componentDidUpdate(e, t, i) {
                    let n = this.ref.current;
                    this.state.canPlay && this.props.autoPlay ? n.play() : (n.pause(), n.currentTime = 0), this.state.browserIsSafari && void 0 === this.safariDelayTimeout && (this.safariDelayTimeout = setTimeout(() => {
                        this.setState({
                            safariDisplayReady: !0
                        })
                    }, 250))
                }
                componentWillUnmount() {
                    clearTimeout(this.objectFillTimeout), clearTimeout(this.safariDelayTimeout), clearTimeout(this.timeout)
                }
                render() {
                    var e;
                    let t = Boolean(this.props.autoPlay),
                        i = {
                            opacity: 1
                        },
                        r = {};
                    return this.state.browserIsSafari && (this.state.safariVersion >= 16 ? r.objectFit = "contain" : r.objectFit = "fill"), this.props.objectFitFill && this.state.browserIsSafari && (i.opacity = 0, this.state.safariDisplayReady && (i.opacity = 1)), (0, n.jsx)(s, {
                        autoPlay: t,
                        css: i,
                        loop: !0,
                        muted: !0,
                        preload: "metadata",
                        ref: this.ref,
                        style: { ...r,
                            ...null !== (e = this.props.customStyles) && void 0 !== e ? e : {}
                        },
                        children: this.props.children
                    })
                }
                constructor(e) {
                    super(e), this.randomDelayTime = 0, this.ref = (0, r.createRef)(), this.state = {
                        browserIsSafari: !1,
                        canPlay: !0,
                        objectFillOverride: !1,
                        safariDisplayReady: !1,
                        safariVersion: 0
                    }, this.props.randomDelay && (this.state.canPlay = !1)
                }
            }
            var c = d
        },
        2062: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                __N_SSP: function() {
                    return tR
                },
                default: function() {
                    return tF
                }
            });
            var n = i(2322),
                r = i(2068),
                a = i(2168),
                l = i(3653),
                o = i(6794);
            let s = (0, o.ZP)("div", {
                    alignItems: "center",
                    backgroundColor: "#303030",
                    color: "$white1000",
                    display: "flex",
                    position: "relative",
                    p: "$md",
                    width: "100%",
                    "@media (min-width: 1240px)": {
                        height: "60px",
                        justifyContent: "center"
                    },
                    "@desktopExtended": {
                        mx: "auto",
                        maxWidth: "1560px"
                    },
                    variants: {
                        active: {
                            false: {
                                display: "none"
                            }
                        }
                    }
                }),
                d = (0, o.ZP)("div", {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    ["& ".concat(l.x)]: {
                        pb: "3px"
                    },
                    ["& ".concat(a.S)]: {
                        mt: "$lg"
                    },
                    "@tabletLandscape": {
                        flexDirection: "row",
                        justifyContent: "center",
                        ["& ".concat(a.S)]: {
                            mt: 0
                        }
                    },
                    "@media (min-width: 1240px)": {
                        ["& ".concat(a.S)]: {
                            ml: "$sm"
                        }
                    }
                }),
                c = (0, o.ZP)("span", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "$sm",
                    "@tabletLandscape": {
                        width: "80%"
                    },
                    "@media (min-width: 1240px)": {
                        width: "unset"
                    }
                }),
                x = e => {
                    let {
                        active: t,
                        buttonText: i,
                        buttonUrl: a,
                        text: l
                    } = e;
                    return (0, n.jsx)(s, {
                        active: t,
                        children: (0, n.jsxs)(d, {
                            children: [(0, n.jsx)(c, {
                                children: l
                            }), (0, n.jsx)(r.Z, {
                                href: a,
                                children: i
                            })]
                        })
                    })
                };
            var p = i(7729),
                h = i.n(p);
            let g = (0, o.ZP)("div", {
                    display: "flex",
                    flexDirection: "column"
                }),
                m = e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.jsxs)(g, {
                        children: [(0, n.jsxs)(h(), {
                            children: [(0, n.jsx)("title", {
                                children: "Blur: NFT Marketplace for Pro Traders"
                            }), (0, n.jsx)("meta", {
                                name: "description",
                                content: "Sweep NFTs across multiple marketplaces, snipe reveals faster than others, and manage your portfolio with advanced analytics. Zero fees."
                            }), (0, n.jsx)("meta", {
                                property: "og:title",
                                content: "Fastest NFT Marketplace for Pro Traders"
                            }), (0, n.jsx)("meta", {
                                property: "og:image",
                                content: "https://imgs.blur.io/_assets/common/og.png"
                            }), (0, n.jsx)("meta", {
                                property: "og:description",
                                content: "Sweep NFTs across multiple marketplaces, snipe reveals faster than others, and manage your portfolio with advanced analytics. Zero fees."
                            }), (0, n.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            })]
                        }), t]
                    })
                };
            var f = i(9097),
                u = i.n(f),
                b = i(4970),
                w = i(2784),
                j = i(6388);
            let y = (0, w.forwardRef)((e, t) => {
                    let {
                        children: i,
                        ...r
                    } = e;
                    return (0, n.jsx)(j.D, {
                        ref: t,
                        ...r,
                        children: i
                    })
                }),
                v = (0, o.ZP)(y, {
                    px: "$md"
                }),
                $ = (0, o.ZP)(v, {
                    borderBottom: "1px solid #303030",
                    borderTop: "1px solid #303030",
                    flexDirection: "row",
                    justifyContent: "center",
                    mt: "$xl",
                    px: "$md",
                    "@desktopExtended": {
                        mx: "auto",
                        maxWidth: "1560px"
                    }
                }),
                k = (0, o.ZP)("div", {
                    cursor: "pointer",
                    display: "flex",
                    "&:hover span": {
                        color: "$white1000"
                    },
                    "&:hover path": {
                        fill: "$white1000"
                    }
                }),
                P = (0, o.ZP)("span", {
                    color: "$green300",
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: "150%",
                    padding: "$lg 0",
                    textShadow: "0px 0px 16px rgba(173, 226, 93, 0.8), 0px 0px 20px rgba(173, 226, 93, 0.4)",
                    transition: "all .2s ease-in-out"
                }),
                Z = (0, o.ZP)("span", {
                    alignItems: "center",
                    color: "$green300",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    ml: "$sm",
                    width: "18px"
                }),
                D = e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.jsx)(u(), {
                        href: "https://mirror.xyz/blurdao.eth/vYOjzk4cQCQ7AtuJWWiZPoNZ04YKQmTMsos0NNq_hYs",
                        children: (0, n.jsx)($, {
                            children: (0, n.jsxs)(k, {
                                children: [(0, n.jsx)(P, {
                                    children: t
                                }), (0, n.jsx)(Z, {
                                    children: (0, n.jsx)(b.Z, {
                                        variant: "arrowRight",
                                        css: {
                                            height: "16px",
                                            width: "18px",
                                            "& path": {
                                                fill: "$green300"
                                            }
                                        }
                                    })
                                })]
                            })
                        })
                    })
                };
            var S = i(5237),
                C = i.n(S),
                I = i(6622),
                W = function(e) {
                    let {
                        as: t,
                        children: i,
                        color: r = "orange",
                        ...a
                    } = e;
                    return (0, n.jsx)(I.w, {
                        as: t || "h1",
                        color: r,
                        ...a,
                        children: i
                    })
                },
                z = function(e) {
                    let {
                        threshold: t
                    } = e, [i, n] = (0, w.useState)(!1), r = (0, w.useRef)(null);
                    return (0, w.useEffect)(() => {
                        let e = new window.IntersectionObserver(e => {
                            let [t] = e;
                            if (t.isIntersecting) {
                                n(!0);
                                return
                            }
                            n(!1)
                        }, {
                            root: null,
                            threshold: t
                        });
                        return e.observe(r.current), () => {
                            e.disconnect()
                        }
                    }), {
                        isActive: i,
                        ref: r
                    }
                };
            let T = (0, o.ZP)("span", {
                    color: "$gray200",
                    display: "flex"
                }),
                R = (0, o.ZP)(v, {
                    my: "$xl3"
                }),
                F = (0, o.ZP)(j.D, {
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    "@tablet": {
                        mx: "auto",
                        maxWidth: "1024px"
                    }
                }),
                L = (0, o.ZP)(j.D, {
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50%",
                    "@tablet": {
                        width: "20%"
                    },
                    "@desktop": {
                        width: "25%"
                    }
                }),
                _ = (0, o.ZP)(I.w, {
                    fontSize: "$xl4",
                    "@desktop": {
                        fontSize: "$xl5"
                    }
                }),
                H = (0, o.ZP)(T, {
                    color: "$orange500",
                    fontSize: "$sm",
                    textTransform: "uppercase"
                }),
                E = (0, o.ZP)("div", {
                    display: "none",
                    height: "507px",
                    position: "absolute",
                    transform: "translate3d(-142px, 130px, 0) rotate(-61.18deg)",
                    width: "288px",
                    "@tabletLandscape": {
                        display: "block",
                        transform: "translate3d(-182px, 400px, 0) rotate(-51.18deg)"
                    },
                    "@desktop": {
                        transform: "translate3d(-72px, 500px, 0) rotate(-61.18deg)"
                    }
                }),
                N = (0, o.ZP)("div", {
                    display: "none",
                    height: "479px",
                    position: "absolute",
                    width: "479px",
                    "@tabletLandscape": {
                        display: "block",
                        right: "-350px",
                        top: "200px"
                    },
                    "@desktop": {
                        right: "-224px",
                        top: "200px"
                    }
                }),
                B = C()(() => i.e(606).then(i.bind(i, 2606)), {
                    loadableGenerated: {
                        webpack: () => [2606]
                    },
                    ssr: !1
                }),
                A = C()(() => i.e(557).then(i.bind(i, 6557)), {
                    loadableGenerated: {
                        webpack: () => [6557]
                    },
                    ssr: !1
                }),
                M = e => {
                    let {
                        h1: t,
                        h3: i,
                        stats: r
                    } = e, {
                        isActive: a,
                        ref: l
                    } = z({
                        threshold: .25
                    });
                    return (0, n.jsxs)(R, {
                        ref: l,
                        children: [(0, n.jsx)(W, {
                            css: {
                                "@tablet": {
                                    fontSize: "$xl6"
                                },
                                "@desktop": {
                                    fontSize: "$xl7"
                                }
                            },
                            children: t
                        }), (0, n.jsx)(y, {
                            css: {
                                justifyContent: "center",
                                padding: "$md"
                            },
                            children: (0, n.jsx)(y, {
                                css: {
                                    margin: "0 auto $sm",
                                    maxWidth: "680px"
                                },
                                children: (0, n.jsx)(W, {
                                    as: "h3",
                                    color: "gray",
                                    css: {
                                        mx: "-6px",
                                        width: "calc(100% + 12px)",
                                        "@tablet": {
                                            fontSize: "$xl2"
                                        },
                                        "@desktop": {
                                            fontSize: "$xl3"
                                        }
                                    },
                                    children: i
                                })
                            })
                        }), (0, n.jsx)(F, {
                            children: r.map(e => {
                                let {
                                    heading: t,
                                    label: i
                                } = e, r = "stat-".concat(t, "-").concat(i);
                                return (0, n.jsxs)(L, {
                                    children: [(0, n.jsx)(_, {
                                        children: t
                                    }), (0, n.jsx)(H, {
                                        children: i
                                    })]
                                }, r)
                            })
                        }), (0, n.jsx)(A, {
                            isActive: a,
                            StyledTube: E
                        }), (0, n.jsx)(B, {
                            isActive: a,
                            StyledOrb: N
                        })]
                    })
                };
            var V = i(299);
            let O = (0, o.ZP)(j.D, {
                    alignContent: "center",
                    alignItems: "center",
                    border: "1px solid $orange200",
                    justifyContent: "center",
                    textAlign: "center",
                    ["& ".concat(I.w)]: {
                        alignItems: "center",
                        backgroundColor: "$black800",
                        lineHeight: 1.25,
                        margin: 0,
                        "@tablet": {
                            margin: "0 auto",
                            px: "64px",
                            width: "unset"
                        },
                        "@desktop": {
                            px: "96px"
                        }
                    },
                    variants: {
                        small: {
                            true: {
                                p: 0,
                                ["& ".concat(I.w)]: {
                                    justifyContent: "flex-start",
                                    px: 0,
                                    width: "100%",
                                    "@tablet": {}
                                }
                            }
                        }
                    }
                }),
                Y = (0, w.forwardRef)((e, t) => {
                    let {
                        children: i,
                        heading: r,
                        small: a = !1,
                        ...l
                    } = e, o = {};
                    return a ? o.fontSize = "$xl2" : o.fontSize = "32px", (0, n.jsxs)(O, {
                        ref: t,
                        small: a,
                        ...l,
                        children: [r && (0, n.jsx)(y, {
                            css: {
                                backgroundImage: a ? void 0 : "url(/homepage/img/homepage/dots_pattern.png)",
                                backgroundPosition: "left center",
                                backgroundRepeat: "repeat no-repeat",
                                backgroundSize: "70px",
                                borderBottom: "1px solid $orange200",
                                height: a ? "32px" : "48px",
                                width: "100%"
                            },
                            children: (0, n.jsx)(W, {
                                as: "h2",
                                css: o,
                                children: r
                            })
                        }), (0, n.jsx)(y, {
                            css: {
                                alignItems: "center",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                padding: a ? 0 : "40px 48px"
                            },
                            children: i
                        })]
                    })
                });
            var G = i(6471),
                X = i(3301),
                q = i(3278);
            let U = C()(() => i.e(575).then(i.bind(i, 2575)), {
                    loadableGenerated: {
                        webpack: () => [2575]
                    },
                    ssr: !1
                }),
                Q = e => {
                    let {
                        handle: t,
                        heading: i,
                        order: r,
                        tweetFallbackImg: a,
                        tweetId: l,
                        video: o
                    } = e, [s, d] = (0, w.useState)("ignore");
                    (0, w.useEffect)(() => {
                        d("safari" == X.Z.name.toLowerCase() ? parseInt(X.Z.version) >= 16 ? "safariLatest" : "safariLegacy" : "ignore")
                    }, []);
                    let {
                        ref: c,
                        inView: x
                    } = (0, V.YD)();
                    return (0, n.jsxs)(q.iC, {
                        ref: c,
                        children: [(0, n.jsxs)(q.rm, {
                            order: r,
                            children: [(0, n.jsx)(q.pd, {
                                children: i
                            }), (0, n.jsx)(q.$9, {
                                children: (0, n.jsx)(Y, {
                                    heading: t,
                                    small: !0,
                                    children: (0, n.jsx)(U, {
                                        tweetFallbackImg: a,
                                        tweetId: l
                                    })
                                })
                            })]
                        }), (0, n.jsx)(q.Nb, {
                            order: r,
                            children: (0, n.jsx)(q.zn, {
                                children: (0, n.jsx)(q.Fp, {
                                    browserVersion: s,
                                    children: (0, n.jsxs)(G.Z, {
                                        autoPlay: x,
                                        children: [(0, n.jsx)("source", {
                                            src: o.webm,
                                            type: "video/mp4"
                                        }), (0, n.jsx)("source", {
                                            src: o.mp4,
                                            type: "video/mp4"
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                },
                J = e => {
                    let {
                        items: t
                    } = e;
                    return (0, n.jsx)(q.kd, {
                        children: t.map((e, t) => {
                            let { ...i
                            } = e;
                            return (0, n.jsx)(Q, {
                                order: t % 2 == 0 ? void 0 : "swap",
                                ...i
                            }, t)
                        })
                    })
                };
            var K = function(e) {
                let {
                    children: t,
                    ...i
                } = e;
                return (0, n.jsx)(T, { ...i,
                    children: t
                })
            };
            (0, o.ZP)("div", {
                alignItems: "center",
                display: "flex",
                flex: "1 1 100%",
                height: "246px",
                justifyContent: "center",
                position: "relative",
                width: "100%",
                margin: "16px 12px 0",
                zIndex: 1,
                "& video": {
                    height: "100%",
                    left: 0,
                    margin: "0 auto",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    "@tablet": {
                        objectFit: "fill",
                        "@media not all and (min-resolution:.001dpcm)": {
                            "@supports (-webkit-appearance:none) and (stroke-color:transparent)": {
                                objectFit: "cover"
                            }
                        }
                    }
                },
                "@tablet": {
                    height: "562px",
                    margin: "0 30px"
                }
            });
            let ee = (0, o.ZP)("img", {
                    display: "flex",
                    mixBlendMode: "lighten",
                    width: "40%",
                    zIndex: 2,
                    "@tablet": {
                        width: "380px"
                    }
                }),
                et = (0, o.ZP)(j.D, {
                    mt: "$xl",
                    justifyContent: "center",
                    overflow: "hidden",
                    "@mobile": {
                        mb: "$xl"
                    },
                    "@tablet": {
                        mb: 0,
                        height: "300px"
                    }
                }),
                ei = (0, o.ZP)(j.D, {
                    flexDirection: "row",
                    justifyContent: "center",
                    "& .link-text": {
                        ml: "$sm",
                        "&:hover": {
                            color: "$white1000"
                        }
                    },
                    "& > *": {
                        display: "flex",
                        justifyContent: "center",
                        mx: "$md"
                    },
                    "@tablet": {
                        m: "unset",
                        width: "unset",
                        ml: "16px"
                    }
                }),
                en = () => (0, n.jsxs)(et, {
                    children: [(0, n.jsx)(ee, {
                        src: "/homepage/img/logo.gif",
                        css: {
                            margin: "0 auto 16px",
                            height: "84px",
                            width: "280px"
                        }
                    }), (0, n.jsxs)(y, {
                        css: {
                            "@tablet": {
                                flexDirection: "row",
                                justifyContent: "center"
                            }
                        },
                        children: [(0, n.jsx)(y, {
                            css: {
                                alignItems: "center",
                                "@tablet": {
                                    width: "unset"
                                }
                            },
                            children: (0, n.jsx)(K, {
                                children: "(c) 2022"
                            })
                        }), (0, n.jsxs)(ei, {
                            children: [(0, n.jsx)(u(), {
                                href: "https://twitter.com/blur_io",
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0, n.jsxs)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: ["// ", (0, n.jsx)("span", {
                                        className: "link-text",
                                        children: "Twitter"
                                    })]
                                })
                            }), (0, n.jsx)(u(), {
                                href: "https://discord.gg/blurdao",
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0, n.jsxs)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: ["// ", (0, n.jsx)("span", {
                                        className: "link-text",
                                        children: "Discord"
                                    })]
                                })
                            }), (0, n.jsx)(u(), {
                                href: "https://forms.gle/h1rn861dELqSoZZX9",
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0, n.jsxs)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: ["// ", (0, n.jsx)("span", {
                                        className: "link-text",
                                        children: "API"
                                    })]
                                })
                            })]
                        })]
                    })]
                });
            var er = i(6725);
            let ea = (0, o.ZP)(j.D, {
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",
                    "@desktopExtended": {
                        margin: "0 auto"
                    },
                    variants: {
                        type: {
                            fallback: {},
                            primary: {
                                maxWidth: "1560px"
                            }
                        }
                    }
                }),
                el = (0, o.ZP)(j.D, {
                    height: "100%",
                    position: "absolute"
                }),
                eo = (0, o.ZP)(j.D, {
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%"
                }),
                es = (0, o.ZP)(j.D, {
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "4px",
                    height: "100%",
                    left: 0,
                    opacity: 1,
                    position: "absolute",
                    top: 0
                }),
                ed = (0, o.ZP)(j.D, {
                    background: "linear-gradient(180deg, rgba(8, 4, 4, 0) 50%, #080404 90.22%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%"
                }),
                ec = (0, o.ZP)(j.D, {
                    justifyContent: "flex-end",
                    mt: "320px",
                    p: "$md",
                    width: "100%",
                    "@tablet": {
                        mt: "380px"
                    },
                    "@desktop": {
                        mx: "auto",
                        padding: "$xl $md",
                        maxWidth: "1360px"
                    },
                    "@desktopExtended": {
                        mt: "480px",
                        padding: "$xl 0"
                    },
                    "@4k": {
                        mt: "580px"
                    },
                    variants: {
                        type: {
                            fallback: {},
                            primary: {}
                        }
                    }
                });
            (0, o.ZP)("img", {
                borderRadius: "30px",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                display: "flex",
                height: "52px",
                width: "52px"
            });
            let ex = (0, o.ZP)("h3", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "150%"
                }),
                ep = (0, o.ZP)("h4", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "19px",
                    mt: "$sm",
                    textTransform: "uppercase"
                }),
                eh = (0, o.ZP)(j.D, {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mt: "$xl",
                    "@tablet": {
                        justifyContent: "flex-start"
                    }
                }),
                eg = (0, o.ZP)(j.D, {
                    flexDirection: "row",
                    "@tablet": {
                        width: "unset"
                    }
                }),
                em = (0, o.ZP)(j.D, {
                    width: "40%",
                    "@tablet": {
                        width: "130px"
                    }
                }),
                ef = (0, o.ZP)("span", {
                    color: "$gray200",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "150%",
                    textTransform: "uppercase"
                }),
                eu = (0, o.ZP)(j.D, {
                    alignItems: "center",
                    flexDirection: "row",
                    ["".concat(l.x)]: {
                        ml: "$xs"
                    }
                }),
                eb = (0, o.ZP)("span", {
                    color: "$white1000",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "150%"
                }),
                ew = (0, o.ZP)("button", {
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, .4)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "$sm",
                    color: "$white1000",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    outline: "none",
                    padding: "$sm $md",
                    transition: "all .2s ease-in-out",
                    "&:hover": {
                        backgroundColor: "$white1000",
                        color: "$black800",
                        "& path": {
                            fill: "$black800"
                        }
                    },
                    "@tablet": {
                        width: "unset"
                    },
                    variants: {
                        active: {
                            true: {
                                backgroundColor: "$white1000",
                                color: "$black800",
                                "& path": {
                                    fill: "$black800"
                                }
                            }
                        }
                    }
                }),
                ej = (0, o.ZP)("span", {
                    alignContent: "center",
                    alignItems: "center",
                    display: "flex",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "17px",
                    textTransform: "uppercase",
                    ["".concat(l.x)]: {
                        display: "none"
                    },
                    "@tablet": {
                        ["".concat(l.x)]: {
                            display: "flex"
                        }
                    }
                }),
                ey = (0, o.ZP)("span", {
                    display: "none",
                    "@tablet": {
                        display: "inline",
                        mx: "$sm"
                    }
                }),
                ev = (0, o.ZP)(j.D, {
                    flexDirection: "row",
                    position: "relative"
                }),
                e$ = (0, o.ZP)(j.D, {
                    flexDirection: "row",
                    margin: "15px -20px 0",
                    overflowX: "scroll",
                    overflowY: "visible",
                    padding: "20px 18px",
                    scrollbarWidth: 0,
                    width: "calc(100% + 30px)",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                ek = (0, o.ZP)(j.D, {
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "4px",
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                    height: "108px",
                    mr: "1.2%",
                    transition: "all 450ms",
                    minWidth: "160px",
                    width: "160px",
                    zIndex: 0,
                    "&:last-child": {
                        mr: 0
                    },
                    "@tablet": {
                        height: "136px",
                        minWidth: "19%",
                        width: "19%"
                    },
                    "@desktop": {
                        height: "160px"
                    },
                    variants: {
                        active: {
                            true: {
                                boxShadow: "rgb(255 197 132 / 30%) 0px 5px 30px"
                            }
                        },
                        lift: {
                            hover: {
                                willChange: "transform",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    transition: "transform 125ms"
                                }
                            },
                            sticky: {
                                transform: "translateY(-8px)",
                                transition: "transform 125ms",
                                willChange: "transform"
                            }
                        }
                    }
                }),
                eP = (0, o.ZP)(j.D, {
                    borderRadius: "4px",
                    height: "100%",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    padding: "$md",
                    position: "relative",
                    zIndex: 1
                }),
                eZ = (0, o.ZP)(j.D, {
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    transform: "scale(1, 1)",
                    transition: "all .2s ease-in-out",
                    width: "100%",
                    willChange: "transform",
                    variants: {
                        grow: {
                            true: {
                                transform: "scale(1.1, 1.1)"
                            }
                        }
                    }
                }),
                eD = (0, o.ZP)(j.D, {
                    backgroundColor: "$black800",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "4px",
                    height: "100%",
                    left: 0,
                    top: 0,
                    width: "100%"
                }),
                eS = (0, o.ZP)(j.D, {
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
                    bottom: 0,
                    height: "68px",
                    left: 0,
                    position: "absolute",
                    width: "100%",
                    zIndex: 2
                }),
                eC = (0, o.ZP)(j.D, {
                    height: "100%",
                    justifyContent: "space-between",
                    zIndex: 3
                }),
                eI = (0, o.ZP)("img", {
                    borderRadius: "30px",
                    display: "flex",
                    filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.2))",
                    height: "40px",
                    width: "40px"
                }),
                eW = (0, o.ZP)("span", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "14px",
                    fontWeight: 600
                }),
                ez = (0, o.ZP)(j.D, {
                    height: "100%",
                    position: "absolute"
                }),
                eT = (0, o.ZP)(j.D, {
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "4px",
                    boxSizing: "initial",
                    flexShrink: 0,
                    mx: "$xs",
                    scrollSnapAlign: "center",
                    variants: {
                        nftRatio: {
                            square: {
                                height: "240px",
                                width: "240px",
                                "&:first-child": {
                                    ml: "calc((100vw - 240px) / 2)"
                                },
                                "&:last-child": {
                                    mr: "calc((100vw - 240px) / 2)"
                                },
                                "@tablet": {
                                    height: "300px",
                                    width: "300px"
                                },
                                "@tabletLandscape": {
                                    height: "180px",
                                    mx: "$md",
                                    width: "180px",
                                    "&:first-child": {
                                        ml: "$md"
                                    },
                                    "&:last-child": {
                                        mr: "$md"
                                    }
                                },
                                "@media (min-width: 1240px)": {
                                    height: "230px",
                                    width: "230px"
                                },
                                "@desktop": {
                                    "&:first-child": {
                                        ml: 0
                                    },
                                    "&:last-child": {
                                        mr: 0
                                    }
                                },
                                "@4k": {
                                    height: "375px",
                                    m: 0,
                                    width: "375px"
                                }
                            },
                            nineByTwelve: {
                                height: "230px",
                                width: "172.50px",
                                "&:first-child": {
                                    ml: "calc((100vw - 210px) / 2)"
                                },
                                "&:last-child": {
                                    mr: "calc((100vw - 210px) / 2)"
                                },
                                "@tablet": {
                                    height: "250px",
                                    width: "187.50px",
                                    "&:first-child": {
                                        ml: "$md"
                                    },
                                    "&:last-child": {
                                        mr: "$md"
                                    }
                                },
                                "@tabletLandscape": {
                                    "&:nth-child(4)": {
                                        mr: "$xs"
                                    },
                                    "&:nth-child(5)": {
                                        ml: "$xs"
                                    }
                                },
                                "@media (min-width: 1240px)": {},
                                "@desktopExtended": {
                                    height: "300px",
                                    width: "225px",
                                    "&:first-child": {
                                        ml: 0
                                    },
                                    "&:last-child": {
                                        mr: 0
                                    }
                                },
                                "@4k": {
                                    height: "350px",
                                    width: "262.50px"
                                }
                            },
                            sixteenByNine: {
                                height: "196.88px",
                                width: "350px",
                                "&:first-child": {
                                    ml: "calc((100vw - 350px) / 2)"
                                },
                                "&:last-child": {
                                    mr: "calc((100vw - 350px) / 2)"
                                },
                                "@tablet": {
                                    height: "225px",
                                    width: "400px",
                                    "&:first-child": {
                                        ml: "$md"
                                    },
                                    "&:last-child": {
                                        mr: "$md"
                                    }
                                },
                                "@desktopExtended": {
                                    "&:first-child": {
                                        ml: 0
                                    },
                                    "&:last-child": {
                                        mr: 0
                                    }
                                },
                                "@tabletLandscape": {
                                    height: "225px",
                                    width: "400px"
                                }
                            },
                            twentysevenByNine: {
                                height: "108.33px",
                                width: "325px",
                                "&:first-child, &:nth-child(5)": {
                                    ml: "calc((100vw - 325px) / 2 - $gutterMobile)"
                                },
                                "&:nth-child(4), &:last-child": {
                                    mr: "calc((100vw - 325px) / 2 - $gutterMobile)"
                                },
                                "@tablet": {
                                    "&:first-child, &:nth-child(5)": {
                                        ml: "$md"
                                    },
                                    "&:nth-child(4), &:last-child": {
                                        mr: "$md"
                                    }
                                },
                                "@tabletLandscape": {
                                    height: "78.67px",
                                    width: "236px"
                                },
                                "@media (min-width: 1240px)": {
                                    height: "96.67px",
                                    width: "290px"
                                },
                                "@desktop": {},
                                "@desktopExtended": {
                                    height: "108.33px",
                                    width: "325",
                                    "&:first-child, &:nth-child(5)": {
                                        ml: 0
                                    },
                                    "&:nth-child(4), &:last-child": {
                                        mr: 0
                                    }
                                },
                                "@4k": {
                                    height: "116.67px",
                                    width: "350px"
                                }
                            }
                        }
                    }
                }),
                eR = (0, o.ZP)(j.D, {
                    alignItems: "center",
                    flexDirection: "row",
                    height: "270px",
                    mt: "$xl3",
                    overflowX: "scroll",
                    scrollbarWidth: 0,
                    scrollSnapType: "x mandatory",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    zIndex: 1,
                    "@tablet": {
                        height: "330px"
                    },
                    "@tabletLandscape": {
                        justifyContent: "space-between",
                        overflowX: "initial",
                        mx: "auto"
                    },
                    "@desktop": {
                        maxWidth: "1360px"
                    },
                    "@desktopExtended": {
                        height: "500px"
                    },
                    "@4k": {
                        height: "530px"
                    },
                    variants: {
                        nftRatio: {
                            square: {
                                "@tabletLandscape": {
                                    ["& ".concat(eT)]: {
                                        display: "none"
                                    },
                                    ["& ".concat(eT, ":nth-child(n + 1):nth-child(-n+5)")]: {
                                        display: "flex"
                                    }
                                },
                                "@media (min-width: 1240px)": {},
                                "@desktop": {},
                                "@desktopExtended": {
                                    columnGap: "20px",
                                    display: "grid",
                                    gridTemplateColumns: "repeat(5, 1fr)",
                                    rowGap: "10px",
                                    width: "fit-content",
                                    maxWidth: "1560px"
                                },
                                "@4k": {
                                    maxWidth: "1860px"
                                }
                            },
                            nineByTwelve: {
                                "@tablet": {},
                                "@tabletLandscape": {
                                    ["& ".concat(eT)]: {
                                        display: "none"
                                    },
                                    ["& ".concat(eT, ":nth-child(n + 1):nth-child(-n+5)")]: {
                                        display: "flex"
                                    }
                                },
                                "@media (min-width: 1240px)": {},
                                "@4k": {}
                            },
                            sixteenByNine: {
                                "@tablet": {},
                                "@tabletLandscape": {},
                                "@media (min-width: 1240px)": {
                                    ["& ".concat(eT)]: {
                                        display: "none"
                                    },
                                    ["& ".concat(eT, ":nth-child(n + 1):nth-child(-n+3)")]: {
                                        display: "flex"
                                    }
                                },
                                "@4k": {}
                            },
                            twentysevenByNine: {
                                columnGap: "10px",
                                display: "grid",
                                height: "246px",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                                mt: "calc($xl3 + 12px)",
                                rowGap: "10px",
                                "@tablet": {
                                    gridTemplateColumns: "repeat(4, 1fr)",
                                    height: "270px",
                                    margin: "$xl4 auto 0"
                                },
                                "@tabletLandscape": {
                                    py: "40px",
                                    maxWidth: "1024px"
                                },
                                "@media (min-width: 1240px)": {
                                    maxWidth: "1240px"
                                },
                                "@desktop": {
                                    maxWidth: "1360px"
                                },
                                "@desktopExtended": {
                                    pt: "80px"
                                },
                                "@4k": {
                                    margin: "140px auto 0",
                                    maxWidth: "1560px"
                                }
                            }
                        }
                    }
                }),
                eF = e => {
                    let {
                        nfts: t,
                        nftRatio: i,
                        setIsHoveringImage: r
                    } = e;
                    return (0, n.jsx)(ez, {
                        onMouseLeave: r(!1),
                        onMouseEnter: r(!0),
                        children: (0, n.jsx)(eR, {
                            nftRatio: i,
                            children: null == t ? void 0 : t.map((e, t) => {
                                let {
                                    imgUrl: r
                                } = e;
                                return (0, n.jsx)(eT, {
                                    css: {
                                        backgroundImage: "url(".concat(r, ")")
                                    },
                                    nftRatio: i
                                }, "fallback-image-".concat(t))
                            })
                        })
                    })
                },
                eL = e => {
                    let {
                        cssImage1: t,
                        cssImage2: i,
                        setIsHoveringImage: r,
                        scale: a
                    } = e;
                    return (0, n.jsx)(el, {
                        onMouseLeave: r(!1),
                        onMouseOver: r(!0),
                        children: (0, n.jsxs)(eo, {
                            css: {
                                transform: "scale(".concat(a, ", ").concat(a, ")")
                            },
                            children: [(0, n.jsx)(es, {
                                css: t,
                                children: (0, n.jsx)(ed, {})
                            }), (0, n.jsx)(es, {
                                css: i,
                                children: (0, n.jsx)(ed, {})
                            })]
                        })
                    })
                },
                e_ = e => {
                    let {
                        activeCollectionIndex: t,
                        collections: i,
                        setActiveCollectionIndex: r
                    } = e;
                    i.length;
                    let [a, l] = (0, w.useState)(-1), o = (0, er.Z)();
                    (0, w.useEffect)(() => {
                        o || l(0)
                    }, []);
                    let s = e => t => {
                            t && t.preventDefault(), l(e)
                        },
                        d = e => t => {
                            t && t.preventDefault(), r(e)
                        };
                    return (0, n.jsx)(e$, {
                        children: i.map((e, i) => {
                            let r, {
                                    featuredImageUrl: l,
                                    smallFeaturedImageUrl: c,
                                    iconUrl: x,
                                    title: p
                                } = e,
                                h = i === t,
                                g = !o && i == a;
                            return !o && (a > -1 ? g && (r = "sticky") : a > -1 && (r = h ? "sticky" : "hover")), (0, n.jsx)(ek, {
                                active: h,
                                lift: r,
                                children: (0, n.jsxs)(eP, {
                                    css: {},
                                    onClick: d(i),
                                    onMouseEnter: s(i),
                                    onMouseLeave: s(o ? -1 : t),
                                    children: [(0, n.jsx)(eZ, {
                                        grow: g,
                                        children: (0, n.jsx)(eD, {
                                            css: {
                                                backgroundImage: "url(".concat(null != c ? c : l, ")")
                                            }
                                        })
                                    }), (0, n.jsx)(eS, {}), (0, n.jsxs)(eC, {
                                        children: [x && (0, n.jsx)(eI, {
                                            src: x
                                        }), (0, n.jsx)(eW, {
                                            children: p
                                        })]
                                    })]
                                })
                            }, "primary-hero-thumbnail-".concat(i))
                        })
                    })
                },
                eH = { in: (0, o.F4)({
                        "0%": {
                            opacity: 0
                        },
                        "100%": {
                            opacity: 1
                        }
                    }),
                    out: (0, o.F4)({
                        "0%": {
                            opacity: 1
                        },
                        "100%": {
                            opacity: 0
                        }
                    })
                },
                eE = e => {
                    let {
                        collections: t
                    } = e, [i, r] = (0, w.useState)({
                        activeCollectionIndex: 0,
                        fade: !1,
                        previousCollectionIndex: 0
                    }), {
                        by: a,
                        collectionSlug: l,
                        featuredImageUrl: o,
                        floorPrice: s,
                        title: d,
                        type: c,
                        volume: x
                    } = t[i.activeCollectionIndex], p = "/collection/".concat(l), {
                        featuredImageUrl: h
                    } = t[i.previousCollectionIndex], g = (0, w.useRef)(null), m = (0, w.useRef)(null), [f, u] = (0, w.useState)(!1), j = (0, w.useRef)(null), [y, v] = (0, w.useState)(1), $ = e => t => {
                        t && t.preventDefault();
                        try {
                            var i;
                            (null === (i = m.current) || void 0 === i ? void 0 : i.contains(t.target)) ? u(!1): u(e)
                        } catch (e) {}
                    }, k = e => {
                        r({
                            activeCollectionIndex: e,
                            fade: !0,
                            previousCollectionIndex: i.activeCollectionIndex
                        }), setTimeout(() => {
                            r({
                                activeCollectionIndex: e,
                                fade: !1,
                                previousCollectionIndex: i.activeCollectionIndex
                            })
                        }, 200)
                    };
                    (0, w.useEffect)(() => {
                        let e = e => e.getBoundingClientRect().bottom,
                            t = () => {
                                let t = e(g.current),
                                    i = j.current > window.scrollY;
                                j.current = window.scrollY;
                                let n = 1 + 5e-4 * j.current;
                                if (i && t > window.innerHeight) {
                                    v(1);
                                    return
                                }
                                t < window.innerHeight && (n > 1.2 && (n = 1.2), v(n))
                            };
                        return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t)
                    }, []);
                    let P = {
                            backgroundImage: "url(".concat(h, ")")
                        },
                        Z = {
                            backgroundImage: "url(".concat(o, ")")
                        };
                    return i.fade && (P.animation = "".concat(eH.out, " 200ms ease-in-out"), Z.animation = "".concat(eH.in, " 200ms ease-in-out")), (0, n.jsxs)(ea, {
                        ref: g,
                        type: c,
                        children: ["primary" == c ? (0, n.jsx)(eL, {
                            cssImage1: P,
                            cssImage2: Z,
                            scale: y,
                            setIsHoveringImage: $
                        }) : (0, n.jsx)(eF, {
                            setIsHoveringImage: $,
                            ...t[i.activeCollectionIndex]
                        }), (0, n.jsxs)(ec, {
                            type: c,
                            children: [(0, n.jsx)(ex, {
                                children: d
                            }), (0, n.jsxs)(ep, {
                                children: ["BY ", a]
                            }), (0, n.jsxs)(eh, {
                                children: [(0, n.jsxs)(eg, {
                                    children: [(0, n.jsxs)(em, {
                                        children: [(0, n.jsx)(ef, {
                                            children: "Floor Price"
                                        }), (0, n.jsx)(eu, {
                                            children: s ? (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)(eb, {
                                                    children: s
                                                }), (0, n.jsx)(b.Z, {
                                                    variant: "eth",
                                                    css: {
                                                        height: "16px",
                                                        width: "9.33px"
                                                    }
                                                })]
                                            }) : (0, n.jsx)(eb, {
                                                children: "-"
                                            })
                                        })]
                                    }), (0, n.jsxs)(em, {
                                        children: [(0, n.jsx)(ef, {
                                            children: "1D Volume"
                                        }), (0, n.jsx)(eu, {
                                            children: x ? (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)(eb, {
                                                    children: x
                                                }), (0, n.jsx)(b.Z, {
                                                    variant: "eth",
                                                    css: {
                                                        height: "16px",
                                                        width: "9.33px"
                                                    }
                                                })]
                                            }) : (0, n.jsx)(eb, {
                                                children: "-"
                                            })
                                        })]
                                    })]
                                }), (0, n.jsx)(ew, {
                                    onClick: () => window.location.href = p,
                                    children: (0, n.jsxs)(ej, {
                                        children: ["View", (0, n.jsx)(ey, {
                                            children: "Collection"
                                        }), (0, n.jsx)(b.Z, {
                                            variant: "arrowRight",
                                            css: {
                                                height: "13px",
                                                width: "11.38px"
                                            }
                                        })]
                                    })
                                })]
                            }), (0, n.jsx)(ev, {
                                ref: m,
                                children: (0, n.jsx)(e_, {
                                    activeCollectionIndex: i.activeCollectionIndex,
                                    collections: t,
                                    setActiveCollectionIndex: k
                                })
                            })]
                        })]
                    })
                },
                eN = (0, o.ZP)("h2", {
                    color: "$orange200",
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: "150%",
                    textShadow: "0px 0px 1px #FF8700, 0px 0px 5px rgba(249, 82, 0, 0.6), 0px 5px 4px rgba(249, 15, 0, 0.4)"
                }),
                eB = (0, o.ZP)(j.D, {
                    flexDirection: "row",
                    mt: "$lg",
                    overflowX: "scroll",
                    scrollbarWidth: 0,
                    scrollSnapType: "x mandatory",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                eA = (0, o.ZP)(j.D, {
                    bottom: "10px",
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    zIndex: 1
                }),
                eM = (0, o.ZP)(j.D, {
                    height: "100%",
                    justifyContent: "flex-end"
                });
            (0, o.ZP)(j.D, {
                $$pcThumbsHeight: 0,
                $$pcThumbsMT: 0,
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                height: "$$pcThumbsHeight",
                justifyContent: "center",
                mt: "$$pcThumbsMT",
                overflow: "hidden",
                transition: "all 0.2s ease-in-out",
                "& > a": {
                    display: "flex",
                    margin: "0 15px 15px 0",
                    "&:nth-child(3n)": {
                        mr: 0
                    },
                    "&:nth-child(1n + 7)": {
                        mb: 0
                    }
                }
            });
            let eV = (0, o.ZP)(j.D, {
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(40px)",
                    margin: "0 10px",
                    padding: "12px 16px",
                    transition: "all 0.2s ease-in-out",
                    width: "calc(100% - 20px)"
                }),
                eO = (0, o.ZP)(j.D, {
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "4px",
                    mr: "$lg",
                    overflow: "hidden",
                    scrollSnapAlign: "start",
                    minWidth: "325px",
                    width: "325px",
                    ["&:hover ".concat(eV)]: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                    }
                }),
                eY = (0, o.ZP)(j.D, {
                    borderRadius: "4px 4px 0 0",
                    height: "325px"
                }),
                eG = (0, o.ZP)(j.D, {
                    borderRadius: "0 0 4px 4px",
                    height: "125px"
                }),
                eX = (0, o.ZP)(j.D, {
                    backgroundPosition: "bottom center",
                    backgroundSize: "cover",
                    borderRadius: "4px 4px 0 0",
                    height: "325px",
                    left: 0,
                    position: "absolute",
                    top: 0
                }),
                eq = (0, o.ZP)(j.D, {
                    borderRadius: "0 0 4px 4px",
                    height: "125px",
                    left: 0,
                    overflow: "hidden",
                    position: "absolute",
                    top: 0
                }),
                eU = (0, o.ZP)(j.D, {
                    backgroundPosition: "bottom center",
                    backgroundSize: "cover",
                    height: "325px",
                    justifyContent: "flex-end",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    transform: "scaleY(-1)"
                }),
                eQ = (0, o.ZP)(j.D, {}),
                eJ = (0, o.ZP)(j.D, {
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mb: "$sm"
                }),
                eK = (0, o.ZP)("h4", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "-0.017em",
                    lineHeight: "19px"
                }),
                e0 = (0, o.ZP)("span", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "150%",
                    opacity: "0.7"
                }),
                e1 = (0, o.ZP)(j.D, {
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mt: "$lg"
                }),
                e2 = (0, o.ZP)(j.D, {
                    flex: 1
                }),
                e4 = (0, o.ZP)("span", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "150%",
                    opacity: "0.7",
                    textTransform: "uppercase"
                }),
                e5 = (0, o.ZP)("span", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "150%",
                    textTransform: "uppercase"
                });
            (0, o.ZP)(j.D, {
                backgroundColor: "rgba(255, 255, 255, 1)",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "80px",
                opacity: "0.8",
                transition: "all 0.2s ease-in-out",
                width: "80px",
                "&:hover": {
                    opacity: 1
                }
            });
            let e3 = e => {
                    let {
                        collections: t,
                        title: i
                    } = e;
                    return (0, n.jsxs)(v, {
                        css: {
                            mt: "$lg"
                        },
                        children: [(0, n.jsx)(eN, {
                            children: i
                        }), (0, n.jsx)(eB, {
                            children: t.map((e, t) => {
                                let {
                                    collectionUrl: i,
                                    featuredImageUrl: r,
                                    floorPrice: a,
                                    infoBGColor: l,
                                    numOwners: o,
                                    title: s,
                                    volume: d
                                } = e;
                                return (0, n.jsx)(u(), {
                                    href: i,
                                    children: (0, n.jsxs)(eO, {
                                        children: [(0, n.jsx)(eY, {
                                            children: (0, n.jsx)(eX, {
                                                css: {
                                                    backgroundImage: "url(".concat(r, ")")
                                                }
                                            })
                                        }), (0, n.jsx)(eG, {
                                            children: (0, n.jsx)(eq, {
                                                children: (0, n.jsx)(eU, {
                                                    css: {
                                                        backgroundImage: "linear-gradient(180deg, rgba(0, 109, 179, 0.5) 0%, rgba(0, 109, 179, 0) 100%), url(".concat(r, ")")
                                                    }
                                                })
                                            })
                                        }), (0, n.jsx)(eA, {
                                            children: (0, n.jsx)(eM, {
                                                css: {},
                                                children: (0, n.jsx)(eV, {
                                                    children: (0, n.jsxs)(eQ, {
                                                        children: [(0, n.jsxs)(eJ, {
                                                            children: [(0, n.jsx)(eK, {
                                                                children: s
                                                            }), (0, n.jsx)(b.Z, {
                                                                variant: "arrowRight",
                                                                css: {
                                                                    height: "11.38px",
                                                                    width: "13px"
                                                                }
                                                            })]
                                                        }), (0, n.jsxs)(e0, {
                                                            children: [o, " owners"]
                                                        }), (0, n.jsxs)(e1, {
                                                            children: [(0, n.jsxs)(e2, {
                                                                children: [(0, n.jsx)(e4, {
                                                                    children: "Floor Price"
                                                                }), (0, n.jsx)(e5, {
                                                                    children: a ? (0, n.jsxs)(n.Fragment, {
                                                                        children: [a, (0, n.jsx)(b.Z, {
                                                                            variant: "eth",
                                                                            css: {
                                                                                height: "16px",
                                                                                ml: "$sm",
                                                                                width: "9px"
                                                                            }
                                                                        })]
                                                                    }) : "-"
                                                                })]
                                                            }), (0, n.jsxs)(e2, {
                                                                children: [(0, n.jsx)(e4, {
                                                                    children: "1D Volume"
                                                                }), (0, n.jsx)(e5, {
                                                                    children: d ? (0, n.jsxs)(n.Fragment, {
                                                                        children: [d, (0, n.jsx)(b.Z, {
                                                                            variant: "eth",
                                                                            css: {
                                                                                height: "16px",
                                                                                ml: "$sm",
                                                                                width: "9px"
                                                                            }
                                                                        })]
                                                                    }) : "-"
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                }, "popular-collection-".concat(t))
                            })
                        })]
                    })
                },
                e6 = (0, o.ZP)(j.D, {
                    overflowX: "scroll",
                    scrollbarWidth: 0,
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                e8 = (0, o.ZP)(j.D, {
                    left: 0,
                    position: "sticky",
                    scrollbarWidth: 0,
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                e7 = (0, o.ZP)(j.D, {
                    flexDirection: "row"
                }),
                e9 = (0, o.ZP)("span", {
                    cursor: "pointer",
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: "150%",
                    mr: "$lg",
                    "&:hover": {
                        color: "$white1000"
                    },
                    variants: {
                        active: {
                            true: {
                                color: "$yellow300",
                                textShadow: "0px 0px 1px #FF9900, 0px 0px 5px rgba(249, 164, 0, 0.6), 0px 5px 4px rgba(249, 164, 0, 0.4)",
                                "&:hover": {
                                    color: "$yellow300"
                                }
                            }
                        }
                    }
                }),
                te = (0, o.ZP)(j.D, {
                    borderCollapse: "collapse",
                    mt: "$lg",
                    tableLayout: "fixed"
                }),
                tt = (0, o.ZP)(j.D, {
                    flexDirection: "row"
                }),
                ti = (0, o.ZP)("th", {
                    color: "$gray300",
                    display: "flex",
                    fontSize: "12px",
                    fontWeight: 700,
                    justifyContent: "flex-end",
                    lineHeight: "16.8px",
                    padding: "$xs $md",
                    textTransform: "uppercase",
                    width: "140px",
                    variants: {
                        sticky: {
                            true: {
                                backgroundColor: "$black800",
                                justifyContent: "flex-start",
                                left: 0,
                                pl: 0,
                                position: "sticky",
                                "@tablet": {
                                    flex: 1
                                }
                            }
                        }
                    }
                }),
                tn = (0, o.ZP)("td", {
                    alignItems: "center",
                    color: "$gray100",
                    display: "flex",
                    fontSize: "12px",
                    lineHeight: "21px",
                    width: "140px",
                    "& a": {
                        alignItems: "center",
                        color: "$gray100",
                        display: "flex",
                        height: "100%",
                        justifyContent: "flex-end",
                        padding: "5px $md",
                        width: "100%"
                    },
                    variants: {
                        sticky: {
                            true: {
                                backgroundColor: "$black800",
                                flex: 1,
                                fontWeight: 700,
                                justifyContent: "flex-start",
                                left: 0,
                                pl: 0,
                                position: "sticky",
                                "@tablet": {
                                    flex: 1
                                }
                            }
                        },
                        variant: {
                            green: {
                                color: "$green300",
                                "& a": {
                                    color: "$green300"
                                }
                            },
                            red: {
                                color: "$orange400",
                                "& a": {
                                    color: "$orange400"
                                }
                            }
                        }
                    }
                }),
                tr = (0, o.ZP)("tr", {
                    display: "flex",
                    flexDirection: "row",
                    mb: "0",
                    "@tablet": {
                        width: "100%"
                    }
                }),
                ta = (0, o.ZP)(j.D, {
                    borderTop: "1px solid $gray600",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    pt: "$lg",
                    width: "fit-content",
                    ["& ".concat(tr, ":hover, & ").concat(tr, ":hover ").concat(tn)]: {
                        backgroundColor: "rgb(23, 23, 23)"
                    },
                    "& tr:last-child": {
                        mb: 0
                    }
                }),
                tl = (0, o.ZP)("span", {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "100%"
                }),
                to = e => {
                    let {
                        data: t,
                        headings: i,
                        renderRow: r,
                        tabs: a
                    } = e, l = (0, w.useRef)(null), [o, s] = (0, w.useState)(0), d = t[o], c = e => t => {
                        t && t.preventDefault(), s(e)
                    };
                    return (0, n.jsxs)(e6, {
                        children: [a && (0, n.jsx)(e8, {
                            children: (0, n.jsx)(e7, {
                                children: a.map((e, t) => (0, n.jsx)(e9, {
                                    active: t === o,
                                    onClick: c(t),
                                    children: e
                                }, "table-tab-".concat(t)))
                            })
                        }), (0, n.jsxs)(te, {
                            as: "table",
                            ref: l,
                            children: [(0, n.jsx)(tt, {
                                as: "thead",
                                children: (0, n.jsx)(tr, {
                                    children: i.map((e, t) => (0, n.jsx)(ti, {
                                        sticky: 0 === t,
                                        children: e
                                    }, "table-heading-".concat(t)))
                                })
                            }), (0, n.jsx)(ta, {
                                as: "tbody",
                                children: d.map((e, t) => (0, n.jsx)(w.Fragment, {
                                    children: r(e)
                                }, "table-row-".concat(t)))
                            })]
                        })]
                    })
                },
                ts = e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.jsx)(tr, {
                        children: t
                    })
                },
                td = e => {
                    let {
                        children: t,
                        sticky: i,
                        variant: r
                    } = e;
                    return (0, n.jsx)(tn, {
                        sticky: i,
                        variant: r,
                        children: t
                    })
                },
                tc = e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.jsx)(tl, {
                        children: t
                    })
                };
            to.Cell = td, to.CellText = tc, to.Row = ts;
            let tx = (0, o.ZP)(v, {
                    mt: "$xl3",
                    "th:nth-child(1)": {
                        width: "200px"
                    },
                    "tr td:nth-child(1)": {
                        width: "200px"
                    },
                    "@desktop": {
                        margin: "$xl3 auto 0",
                        p: 0,
                        maxWidth: "1360px"
                    }
                }),
                tp = (0, o.ZP)("img", {
                    border: "1px solid #303030",
                    borderRadius: "32px",
                    display: "inline-flex",
                    height: "40px",
                    mr: "$md",
                    width: "40px"
                }),
                th = e => {
                    let {
                        columnsColored: t,
                        columnsSuffix: i,
                        data: r,
                        headings: a,
                        tabs: l
                    } = e, o = e => {
                        let {
                            collectionUrl: r,
                            iconUrl: a,
                            title: l,
                            values: o
                        } = e, s = o.map((e, a) => {
                            let l;
                            e = e.toString(), t.includes(a) && (l = e.startsWith("-") ? "red" : "green");
                            let o = null;
                            if (i[a]) switch (i[a]) {
                                case "ETH":
                                    o = (0, n.jsx)(b.Z, {
                                        variant: "eth",
                                        css: {
                                            height: "16px",
                                            ml: "$sm",
                                            width: "9px"
                                        }
                                    });
                                    break;
                                case "%":
                                    o = "%"
                            }
                            return "-" === e && (o = null), (0, n.jsx)(to.Cell, {
                                variant: l,
                                children: (0, n.jsxs)(u(), {
                                    href: r,
                                    children: [e, o]
                                })
                            }, "table-cell-".concat(a))
                        });
                        return s.unshift((0, n.jsx)(to.Cell, {
                            sticky: !0,
                            children: (0, n.jsxs)(u(), {
                                href: r,
                                children: [(0, n.jsx)(tp, {
                                    src: a
                                }), (0, n.jsx)(to.CellText, {
                                    children: l
                                })]
                            })
                        }, "table-cell-sticky")), (0, n.jsx)(to.Row, {
                            children: s
                        })
                    };
                    return (0, n.jsx)(tx, {
                        children: (0, n.jsx)(to, {
                            data: r,
                            headings: a,
                            renderRow: o,
                            tabs: l
                        })
                    })
                };
            var tg = i(5803);
            let tm = (0, o.ZP)(v, {
                    backgroundColor: "$black800",
                    borderRadius: "4px",
                    boxShadow: "inset 0px 0px 100px rgba(86, 28, 0, 0.5)",
                    height: "540px",
                    justifyContent: "flex-start",
                    margin: "$xl2 auto 0",
                    overflow: "hidden",
                    "@tablet": {
                        height: "600px"
                    },
                    "@tabletLandscape": {
                        height: "640px",
                        maxWidth: "960px"
                    },
                    "@desktop": {
                        height: "720px",
                        maxWidth: "1360px"
                    }
                }),
                tf = (0, o.ZP)(j.D, {
                    background: "linear-gradient(180deg, rgba(8, 4, 4, 0) 50%, #080404 90.22%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                    height: "580px",
                    left: "-500px",
                    opacity: .5,
                    position: "absolute",
                    top: "-40px",
                    width: "1360px",
                    "& video": {
                        zIndex: -3
                    },
                    "@tablet": {
                        height: "720px",
                        left: "-40%",
                        width: "180%"
                    },
                    "@tabletLandscape": {},
                    "@desktop": {
                        height: "100%",
                        left: 0,
                        p: "40px",
                        width: "100%"
                    }
                }),
                tu = (0, o.ZP)(j.D, {
                    backgroundColor: "rgba(8, 4, 4, 0.5)",
                    height: "100%",
                    left: 0,
                    mixBlendMode: "normal",
                    position: "absolute",
                    top: 0,
                    zIndex: -2
                }),
                tb = (0, o.ZP)(j.D, {
                    bottom: 0,
                    left: "-50%",
                    position: "absolute",
                    width: "200%",
                    zIndex: 0,
                    "@tablet": {
                        bottom: "-10%",
                        left: "-25%",
                        width: "150%"
                    },
                    "@tabletLandscape": {
                        bottom: 0,
                        left: 0,
                        width: "100%"
                    }
                }),
                tw = (0, o.ZP)(j.D, {
                    zIndex: 0
                }),
                tj = (0, o.ZP)(I.w, {
                    color: "$orange200",
                    flex: "unset",
                    fontSize: "24px",
                    fontWeight: 400,
                    letterSpacing: "-0.017em",
                    lineHeight: "150%",
                    mt: "40px",
                    textShadow: "0px 4px 4px rgba(249, 82, 0, 0.5), 0px 0px 2px rgba(255, 135, 0, 0.5), 0px 0px 4px #FF8700, 0px 0px 10px rgba(249, 15, 0, 0.9), -1px 8px 13px rgba(249, 15, 0, 0.6)",
                    textTransform: "uppercase",
                    "@tablet": {
                        fontSize: "32px",
                        mt: "100px"
                    }
                }),
                ty = (0, o.ZP)(T, {
                    color: "$gray100",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "170%",
                    justifyContent: "center",
                    textAlign: "center",
                    "@tablet": {
                        fontSize: "16px",
                        margin: "0 auto",
                        maxWidth: "640px"
                    }
                }),
                tv = (0, o.ZP)(j.D, {
                    alignItems: "center",
                    margin: "$xl2 auto 0",
                    width: "50%"
                }),
                t$ = C()(() => i.e(586).then(i.bind(i, 586)), {
                    loadableGenerated: {
                        webpack: () => [586]
                    },
                    ssr: !1
                }),
                tk = C()(() => i.e(24).then(i.bind(i, 1024)), {
                    loadableGenerated: {
                        webpack: () => [1024]
                    },
                    ssr: !1
                }),
                tP = e => {
                    let {
                        buttonText: t,
                        heading: i,
                        text: a
                    } = e, {
                        isActive: l,
                        ref: o
                    } = z({
                        threshold: .25
                    }), [s, d] = (0, w.useState)(!1);
                    return ((0, w.useEffect)(() => {
                        (0, tg.Z)() && d(!0)
                    }, []), s) ? (0, n.jsx)("div", {
                        ref: o
                    }) : (0, n.jsxs)(tm, {
                        ref: o,
                        children: [(0, n.jsx)(tf, {
                            children: (0, n.jsx)(t$, {
                                isActive: l
                            })
                        }), (0, n.jsx)(tu, {}), (0, n.jsx)(tb, {
                            children: (0, n.jsx)(tk, {
                                isActive: l
                            })
                        }), (0, n.jsxs)(tw, {
                            children: [(0, n.jsx)(tj, {
                                children: i
                            }), (0, n.jsx)(ty, {
                                dangerouslySetInnerHTML: {
                                    __html: a
                                }
                            }), (0, n.jsx)(tv, {
                                children: (0, n.jsx)(r.Z, {
                                    href: "https://blur.io/airdrop",
                                    filled: !0,
                                    children: t
                                })
                            })]
                        })]
                    })
                },
                tZ = (0, o.ZP)("div", {
                    alignItems: "center",
                    display: "flex",
                    flex: "1",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    margin: "$md",
                    width: "120px",
                    "@tablet": {
                        margin: "$md"
                    }
                }),
                tD = (0, o.ZP)("div", {
                    borderRadius: "45px",
                    boxShadow: "0 0 40px rgba(249, 82, 0, 0.5)",
                    display: "flex",
                    height: "90px",
                    width: "90px",
                    "@tablet": {
                        borderRadius: "40px",
                        height: "80px",
                        width: "80px"
                    }
                }),
                tS = (0, o.ZP)("span", {
                    border: "2px solid $orange200",
                    borderRadius: "45px",
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    width: "100%",
                    "@tablet": {
                        borderRadius: "40px"
                    }
                }),
                tC = (0, o.ZP)("img", {
                    display: "flex",
                    height: "100%",
                    transform: "scale(1.1)",
                    width: "100%"
                }),
                tI = e => {
                    let {
                        img: t,
                        text: i
                    } = e;
                    return (0, n.jsxs)(tZ, {
                        children: [(0, n.jsx)(tD, {
                            children: (0, n.jsx)(tS, {
                                children: (0, n.jsx)(tC, {
                                    src: t
                                })
                            })
                        }), (0, n.jsx)(K, {
                            css: {
                                alignItems: "flex-start",
                                height: "48px",
                                justifyContent: "center",
                                mt: "$md",
                                mx: "auto",
                                textTransform: "uppercase",
                                width: "80%"
                            },
                            children: i
                        })]
                    })
                },
                tW = (0, o.ZP)(j.D, {
                    mx: "$md",
                    my: "$xl2",
                    width: "calc(100% - 24px)",
                    "@tablet": {
                        margin: "0 auto",
                        maxWidth: "980px"
                    },
                    "@desktop": {
                        maxWidth: "1360px"
                    },
                    ["& ".concat(I.w)]: {
                        p: "$md",
                        "@tablet": {
                            px: "$lg",
                            py: 0
                        }
                    }
                }),
                tz = e => {
                    let {
                        sectionData: t
                    } = e;
                    return (0, n.jsx)(tW, {
                        children: (0, n.jsx)(Y, {
                            heading: t.heading,
                            children: t.items.map((e, t) => {
                                let {
                                    img: i,
                                    text: r
                                } = e;
                                return (0, n.jsx)(tI, {
                                    img: i,
                                    text: r
                                }, "orange-circle-".concat(t))
                            })
                        })
                    })
                },
                tT = e => {
                    let {
                        sections: t
                    } = e;
                    return (0, n.jsxs)(m, {
                        children: [(0, n.jsx)(eE, {
                            collections: t.heroCollections
                        }), (0, n.jsx)(x, { ...t.pageBanner
                        }), (0, n.jsx)(th, { ...t.tableCollections
                        }), (0, n.jsx)(D, {
                            children: t.contentBanner
                        }), (0, n.jsx)(e3, { ...t.popularCollections
                        }), (0, n.jsx)(M, { ...t.fastestMarketplace
                        }), (0, n.jsx)(tP, { ...t.tokenAirdrop
                        }), (0, n.jsx)(J, { ...t.features
                        }), (0, n.jsx)(tz, {
                            sectionData: t.trustedBy
                        }), (0, n.jsx)(en, {})]
                    })
                };
            var tR = !0,
                tF = tT
        },
        3301: function(e, t) {
            "use strict";
            let i = function() {
                this.spec_string = navigator.userAgent, this.name = this.get_name(), this.version = this.get_version()
            };
            i.prototype.get_name = function() {
                var e = this.spec_string,
                    t = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (t = t[2] ? [t[1], t[2]] : [navigator.appName, navigator.appVersion, "-?"], /trident/i.test(t[1])) {
                    var i = /\brv[ :]+(\d+)/g.exec(e) || [];
                    return "IE"
                }
                if ("Chrome" === t[1]) {
                    var i = e.match(/\bOPR|Edge\/(\d+)/);
                    if (null != i) return "Opera"
                }
                return null != (i = e.match(/version\/(\d+)/i)) && t.splice(1, 1, i[1]), t[0]
            }, i.prototype.get_version = function() {
                var e = this.spec_string,
                    t = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (t = t[2] ? [t[1], t[2]] : [navigator.appName, navigator.appVersion, "-?"], /trident/i.test(t[1])) {
                    var i = /\brv[ :]+(\d+)/g.exec(e) || [],
                        n = i[1] || "";
                    return n
                }
                if ("Chrome" === t[1]) {
                    var i = e.match(/\bOPR|Edge\/(\d+)/),
                        n = i[1];
                    if (null != i) return n
                }
                null != (i = e.match(/version\/(\d+)/i)) && t.splice(1, 1, i[1]);
                var n = t[1];
                return n
            }, t.Z = function() {
                let e = new i;
                return e
            }()
        },
        3278: function(e, t, i) {
            "use strict";
            i.d(t, {
                $9: function() {
                    return x
                },
                Fp: function() {
                    return m
                },
                Nb: function() {
                    return d
                },
                VD: function() {
                    return h
                },
                _x: function() {
                    return p
                },
                iC: function() {
                    return o
                },
                kd: function() {
                    return l
                },
                pd: function() {
                    return c
                },
                rm: function() {
                    return s
                },
                zn: function() {
                    return g
                }
            });
            var n = i(6388),
                r = i(6622),
                a = i(6794);
            let l = (0, a.ZP)(n.D, {
                    my: "$lg",
                    position: "relative"
                }),
                o = (0, a.ZP)(n.D, {
                    my: "$xl2",
                    "@tabletLandscape": {
                        flexDirection: "row",
                        my: "$xl3"
                    },
                    "@desktop": {
                        margin: "$xl3 auto",
                        maxWidth: "1024px"
                    }
                }),
                s = (0, a.ZP)(n.D, {
                    "@tabletLandscape": {},
                    variants: {
                        order: {
                            swap: {
                                "@tabletLandscape": {
                                    ml: "60px"
                                }
                            }
                        }
                    }
                }),
                d = (0, a.ZP)(n.D, {
                    "@tabletLandscape": {
                        justifyContent: "center"
                    },
                    variants: {
                        order: {
                            swap: {
                                "@tabletLandscape": {
                                    order: -1
                                }
                            }
                        }
                    }
                }),
                c = (0, a.ZP)(r.w, {
                    flex: "auto",
                    fontSize: "20px",
                    px: "$md",
                    textAlign: "left",
                    textShadow: "0px 0px 1px #FF8700, 0px 0px 5px rgba(249, 82, 0, 0.6), 0px 5px 4px rgba(249, 15, 0, 0.4)",
                    "@tablet": {
                        textAlign: "center"
                    },
                    "@tabletLandscape": {
                        justifyContent: "flex-start",
                        mt: 0,
                        textAlign: "left"
                    },
                    "@desktop": {
                        mb: "$xl2",
                        maxWidth: "480px"
                    }
                }),
                x = (0, a.ZP)(n.D, {
                    flex: "1 1 100%",
                    flexDirection: "column",
                    height: "200px",
                    margin: "0 auto $lg",
                    padding: "0 $md",
                    width: "100%",
                    maxWidth: "500px",
                    ["& div ".concat(r.w)]: {
                        pl: "$md"
                    },
                    "@tablet": {
                        mt: "$xl2"
                    },
                    "@tabletLandscape": {
                        height: "unset",
                        m: 0
                    },
                    "@desktop": {
                        maxWidth: "400px"
                    }
                }),
                p = (0, a.ZP)("div", {
                    display: "flex",
                    overflow: "hidden",
                    "& img": {
                        mixBlendMode: "lighten"
                    },
                    "& .twitter-tweet": {
                        margin: "0 !important",
                        position: "relative",
                        minWidth: "320px",
                        "@desktop": {
                            minWidth: "390px",
                            maxWidth: "400px !important"
                        },
                        "&:after": {
                            border: "1px solid #000",
                            borderRadius: "12px",
                            content: "",
                            height: "100%",
                            left: 0,
                            pointerEvents: "none",
                            position: "absolute",
                            top: 0,
                            width: "100%"
                        }
                    }
                }),
                h = (0, a.ZP)("div", {
                    cursor: "pointer",
                    position: "relative"
                }),
                g = (0, a.ZP)(n.D, {}),
                m = (0, a.ZP)(n.D, {
                    flex: "1 1 100%",
                    height: "400px",
                    "& video": {
                        maxWidth: "calc(100vw - 20px)"
                    },
                    "@tabletLandscape": {
                        "& video": {
                            maxWidth: "100%"
                        }
                    },
                    "@desktop": {
                        mr: "$xl2",
                        position: "relative",
                        "& video": {
                            height: "100%",
                            objectFit: "fill"
                        }
                    },
                    variants: {
                        browserVersion: {
                            safariLatest: {
                                "& video": {
                                    mt: "-20px"
                                }
                            },
                            safariLegacy: {},
                            ignore: {}
                        }
                    }
                })
        },
        6622: function(e, t, i) {
            "use strict";
            i.d(t, {
                w: function() {
                    return r
                }
            });
            var n = i(6794);
            let r = (0, n.ZP)("h1", {
                color: "$heading$color",
                display: "flex",
                flex: "1 1 100%",
                fontWeight: 300,
                justifyContent: "center",
                my: "16px",
                textAlign: "center",
                textTransform: "uppercase",
                width: "100%",
                variants: {
                    as: {
                        h1: {
                            fontSize: "$xl3",
                            letterSpacing: "-0.017em",
                            lineHeight: "140%",
                            "@tablet": {
                                fontSize: "$xl7"
                            }
                        },
                        h2: {
                            fontSize: "$xl3",
                            letterSpacing: "-2px",
                            lineHeight: "150%"
                        },
                        h3: {
                            fontSize: "$md",
                            lineHeight: "160%",
                            textTransform: "unset",
                            textShadow: "none",
                            "@tablet": {
                                fontSize: "$xl3"
                            }
                        },
                        h4: {
                            fontSize: "$xl",
                            letterSpacing: "-0.017em",
                            lineHeight: "24px"
                        }
                    },
                    color: {
                        gray: {
                            color: "$gray200",
                            textShadow: "none"
                        },
                        green: {
                            color: "$green300",
                            textShadow: "\n          0px 0px 1.89208px #2AF38E,\n          0px 0px 9.4604px rgba(42, 243, 142, 0.6),\n          0px 9.4604px 7.56832px rgba(42, 243, 142, 0.4)\n        "
                        },
                        orange: {
                            color: "$orange200",
                            textShadow: "\n          0px 4px 4px rgba(249, 82, 0, 0.5),\n          0px 0px 2px rgba(255, 135, 0, 0.5),\n          0px 0px 4px #FF8700,\n          0px 0px 10px rgba(249, 15, 0, 0.9),\n          -1px 8px 13px rgba(249, 15, 0, 0.6)\n        "
                        },
                        reddish: {
                            color: "$orange400",
                            textShadow: "none"
                        }
                    }
                },
                compoundVariants: [{
                    as: "h3",
                    color: "green",
                    css: {
                        textShadow: "none"
                    }
                }],
                defaultVariants: {
                    color: "orange"
                }
            })
        }
    },
    function(e) {
        e.O(0, [874, 774, 888, 179], function() {
            return e(e.s = 7314)
        }), _N_E = e.O()
    }
]);