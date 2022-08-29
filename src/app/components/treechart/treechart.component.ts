import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
// declare var $: any
import * as $ from "jquery";

@Component({
  selector: 'app-treechart',
  templateUrl: './treechart.component.html',
  styleUrls: ['./treechart.component.css']
})

export class TreechartComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    var myChart = echarts.init(document.getElementById('main')!);

    myChart.setOption({
      title: {
        text: 'Ice Bucket Challenge'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Fig Tree',
          type: 'tree',
          orient: 'horizontal',  // vertical horizontal
          rootLocation: { x: 100, y: 'center' }, // 根节点位置  {x: 100, y: 'center'}
          nodePadding: 8,
          layerPadding: 200,
          hoverable: false,
          roam: true,
          symbolSize: 6,
          itemStyle: {
            normal: {
              color: '#4883b4',
              label: {
                show: true,
                position: 'right',
                formatter: "{b}",
                textStyle: {
                  color: '#000',
                  fontSize: 12
                }
              },
              lineStyle: {
                color: '#ccc',
                type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

              }
            },
            emphasis: {
              color: '#4883b4',
              label: {
                show: false
              },
              borderWidth: 0,
              // expandAndCollapse: true,
              // animationDuration: 550,
              // animationDurationUpdate: 750
            }
          },

          data: [{


            "name": "Ice Bucket Challenge",

            "children": [{
              "name": "Liu Zuohu",
              "children": [{
                "name": "Zhou",
                "children": [{
                  "name": "Ma"
                }, {
                  "name": "Xu Xiaoping",
                  "children": [{
                    "name": "Niu Wenwen",
                    "children": [{
                      "name": "Yao Jinbo",
                      "children": [{
                        "name": "Cai Wensheng"
                      }, {
                        "name": "Cai"
                      }, {
                        "name": "Wang Fei"
                      }]
                    }, {
                      "name": "Yangshou Bin",
                      "children": [{
                        "name": "All entrepreneurs"
                      }, {
                        "name": "all investors"
                      }, {
                        "name": "All of entrepreneurial services"
                      }]
                    }, {
                      "name": "Pu Yi"
                    }]
                  }, {
                    "name": "Luo Zhenyu",
                    "children": [{
                      "name": "Luo Ji thinking 25000 Member"
                    }]
                  }, {
                    "name": "Wong"
                  }]
                }, {
                  "name": "Huang Zhang"
                }]
              }, {
                "name": "Overheating"
              }, {
                "name": "Liu Jiangfeng",
                "children": [{
                  "name": "He just",
                  "children": [{
                    "name": "Xie Qingjiang"
                  }, {
                    "name": "Wang Xiang"
                  }, {
                    "name": "Wei Ai"
                  }]
                }, {
                  "name": "Wang Yulei"
                }]
              }]
            }, {
              "name": "Lei Jun",
              "children": [{
                "name": "Andy",
                "children": [{
                  "name": "Lang Lang"
                }, {
                  "name": "Su Hua Wei"
                }, {
                  "name": "Jay",
                  "children": [{
                    "name": "Vincent Fang",
                    "children": [{
                      "name": "Giddens"
                    }, {
                      "name": "Alan Kuo"
                    }]
                  }, {
                    "name": "Mayday",
                    "children": [{
                      "name": "Xie Jin Yan",
                      "children": [{
                        "name": "Zhao Hui Sin"
                      }, {
                        "name": "Zhang Fei",
                        "children": [{
                          "name": "Little S"
                        }]
                      }, {
                        "name": "Aaron"
                      }]
                    }, {
                      "name": "Olivia"
                    }, {
                      "name": "Takeshi Kaneshiro"
                    }]
                  }]
                }]
              }, {
                "name": "Li",
                "children": [{
                  "name": "Mr Yu"
                }, {
                  "name": "Pan Shiyi",
                  "children": [{
                    "name": "Ren"
                  }]
                }, {
                  "name": "Tian Liang",
                  "children": [{
                    "name": "Wang Yuelun"
                  }, {
                    "name": "Little Shenyang"
                  }, {
                    "name": "Li Xiaopeng"
                  }]
                }]
              }, {
                "name": "Gou",
                "children": [{
                  "name": "Son",
                  "children": [{
                    "name": "Miyasaka learning"
                  }]
                }, {
                  "name": "Xiaoliang Sunney Xie"
                }, {
                  "name": "Lin Chi-ling"
                }]
              }]
            }, {
              "name": "Koo",
              "children": [{
                "name": "Ma"
              }, {
                "name": "Wang Changtian",
                "children": [{
                  "name": "Deng Chao",
                  "children": [{
                    "name": "Yu browed",
                    "children": [{
                      "name": "Yao Chen",
                      "children": [{
                        "name": "Wu Xiubo"
                      }, {
                        "name": "Daniel Wu"
                      }, {
                        "name": "Honglei"
                      }]
                    }, {
                      "name": "Zhu Fangyu",
                      "children": [{
                        "name": "Wang Shipeng",
                        "children": [{
                          "name": "Yi Jianlian"
                        }]
                      }]
                    }, {
                      "name": "Liang Chao"
                    }]
                  }]
                }, {
                  "name": "Liu Yifei"
                }, {
                  "name": "Liu with"
                }]
              }]
            }, {
              "name": "Zhu Ting",
              "children": [{
                "name": "Zhang Yaokun",
                "children": [{
                  "name": "Jiang Ning"
                }, {
                  "name": "Tang Miao"
                }]
              }, {
                "name": "Zhou Haibin",
                "children": [{
                  "name": "Wang Song",
                  "children": [{
                    "name": "Cai Yun"
                  }, {
                    "name": "Lee Yi Feng"
                  }, {
                    "name": "Wang Tao"
                  }]
                }, {
                  "name": "Shao"
                }, {
                  "name": "Gaudi",
                  "children": [{
                    "name": "Moreno"
                  }, {
                    "name": "Enrique"
                  }, {
                    "name": "Paul"
                  }]
                }]
              }, {
                "name": "Little Yan Chuang"
              }]
            }, {
              "name": "Zheng Lu",
              "children": [{
                "name": "Ka",
                "children": [{
                  "name": "Dong Chengpeng",
                  "children": [{
                    "name": "Iraq a",
                    "children": [{
                      "name": "Xu Song"
                    }, {
                      "name": "pay simbo"
                    }, {
                      "name": "Hong Chen"
                    }]
                  }, {
                    "name": "Wong Cho Lam",
                    "children": [{
                      "name": "Ivana"
                    }, {
                      "name": "Leanne",
                      "children": [{
                        "name": "Song Hee Year"
                      }, {
                        "name": "Linda Chung"
                      }, {
                        "name": "Macy Chan"
                      }]
                    }, {
                      "name": "Jia Ling"
                    }]
                  }, {
                    "name": "off white",
                    "children": [{
                      "name": "Sheng Yu",
                      "children": [{
                        "name": "evil child"
                      }, {
                        "name": "Du Haitao"
                      }, {
                        "name": "Wang Han"
                      }]
                    }, {
                      "name": "faction Specter"
                    }, {
                      "name": "thank God",
                      "children": [{
                        "name": "C-BLOCK chubby"
                      }, {
                        "name": "Fan Yuancheng"
                      }, {
                        "name": "Mike Sui",
                        "children": [{
                          "name": "Godfrey"
                        }, {
                          "name": "Jingle Ma"
                        }]
                      }]
                    }]
                  }]
                }, {
                  "name": "Yi Jianlian, Li Ai, JiangYingRong"
                }]
              }, {
                "name": "Kevin Han"
              }]
            }, {
              "name": "Shu Dewei",
              "children": [{
                "name": "Yao Ming"
              }, {
                "name": "NBA China staff"
              }]
            }, {
              "name": "Ye propylene into",
              "children": [{
                "name": "The Joe Zhai"
              }, {
                "name": "Ji Xiaohua",
                "children": [{
                  "name": "Sicong",
                  "children": [{
                    "name": "Easy to revitalize",
                    "children": [{
                      "name": "Xu Lei"
                    }, {
                      "name": "Tong Dawei",
                      "children": [{
                        "name": "Meng non",
                        "children": [{
                          "name": "Guo Degang",
                          "children": [{
                            "name": "Yu Qian"
                          }]
                        }, {
                          "name": "Huang",
                          "children": [{
                            "name": "ZhangLinPeng",
                            "children": [{
                              "name": "Huang Bowen"
                            }, {
                              "name": "Shuai"
                            }]
                          }, {
                            "name": "Gao Lin",
                            "children": [{
                              "name": "Jianhong"
                            }, {
                              "name": "Li Weifeng"
                            }]
                          }]
                        }]
                      }, {
                        "name": "Kun"
                      }, {
                        "name": "AKB48"
                      }]
                    }, {
                      "name": "Wu Xinhong",
                      "children": [{
                        "name": "Jia Nailiang"
                      }, {
                        "name": "Lu Lu"
                      }, {
                        "name": "angelababy"
                      }]
                    }]
                  }, {
                    "name": "Lin update",
                    "children": [{
                      "name": "Chao"
                    }, {
                      "name": "Tong Liya"
                    }, {
                      "name": "AngelaBaby"
                    }]
                  }, {
                    "name": "Liu Jun"
                  }]
                }, {
                  "name": "Wei Kunlin",
                  "children": [{
                    "name": "Chi Perceived"
                  }, {
                    "name": "Li Miao"
                  }, {
                    "name": "Jiang Zhenyu"
                  }]
                }, {
                  "name": "Liu Chengcheng",
                  "children": [{
                    "name": "Zhang Ying"
                  }, {
                    "name": "King freely",
                    "children": [{
                      "name": "Liu Xiang"
                    }, {
                      "name": "Wu"
                    }, {
                      "name": "Fu Sheng"
                    }]
                  }, {
                    "name": "Wang Feng"
                  }]
                }]
              }]
            }, {
              "name": "Xiao on agriculture",
              "children": [{
                "name": "Chen Lin",
                "children": [{
                  "name": "Ko Wen-je",
                  "children": [{
                    "name": "Jaw"
                  }, {
                    "name": "Wei Te-sheng"
                  }, {
                    "name": "Guo dry"
                  }]
                }, {
                  "name": "straight text",
                  "children": [{
                    "name": "Hau",
                    "children": [{
                      "name": "Luc Besson"
                    }, {
                      "name": "Hu"
                    }, {
                      "name": "Wen-Ta Chiu"
                    }]
                  }, {
                    "name": "Chu"
                  }, {
                    "name": "Wu Se-hwa"
                  }]
                }, {
                  "name": "Kuan Chung-ming",
                  "children": [{
                    "name": "Woody Duh"
                  }, {
                    "name": "Chen Bao-ji"
                  }, {
                    "name": "Yang Panchi"
                  }]
                }]
              }, {
                "name": "Chen Sulan",
                "children": [{
                  "name": "Yen",
                  "children": [{
                    "name": "Zhan Hongzhi",
                    "children": [{
                      "name": "Niu Ze"
                    }, {
                      "name": "Jonathan Lee"
                    }, {
                      "name": "He Feipeng"
                    }]
                  }, {
                    "name": "Chen Qingxiang",
                    "children": [{
                      "name": "Can a Yellow Sun"
                    }, {
                      "name": "Huang Shenghua"
                    }, {
                      "name": "Wu Qi liter"
                    }]
                  }]
                }]
              }, {
                "name": "Cai herders"
              }]
            }, {
              "name": "Jeremy Lin",
              "children": [{
                "name": "Landry - Fields"
              }, {
                "name": "Parsons"
              }]
            }, {
              "name": "Wang Meng",
              "children": [{
                "name": "Yang Yi"
              }, {
                "name": "Ke Fan"
              }, {
                "name": "StephonMarbury"
              }]
            }, {
              "name": "Michelle",
              "children": [{
                "name": "Li Chen"
              }, {
                "name": "somans",
                "children": [{
                  "name": "Huang Xiaoming",
                  "children": [{
                    "name": "Fan Bingbing"
                  }, {
                    "name": "Joke",
                    "children": [{
                      "name": "Wang Jun"
                    }, {
                      "name": "Sina"
                    }]
                  }]
                }]
              }, {
                "name": "Chen Ou"
              }]
            }, {
              "name": "Zhang Ziyi",
              "children": [{
                "name": "TFBoys",
                "children": [{
                  "name": "Shang Geyun Dayton"
                }]
              }, {
                "name": "Han Geng",
                "children": [{
                  "name": "Michael Bay"
                }, {
                  "name": "He Jiong"
                }, {
                  "name": "Na Ying"
                }]
              }, {
                "name": "Sophie Marceau"
              }]
            }, {
              "name": "Jane Zhang",
              "children": [{
                "name": "Zhang Jie",
                "children": [{
                  "name": "happy family"
                }, {
                  "name": "Li"
                }, {
                  "name": "Hsiao"
                }]
              }, {
                "name": "Reno",
                "children": [{
                  "name": "everyday brothers"
                }, {
                  "name": "martial arts",
                  "children": [{
                    "name": "Genie",
                    "children": [{
                      "name": "Liao Junjie",
                      "children": [{
                        "name": "Even Chen Xiang",
                        "children": [{
                          "name": "Ma Zhenhuan"
                        }, {
                          "name": "Xiao Huang Qi"
                        }, {
                          "name": "Poetry An"
                        }]
                      }]
                    }]
                  }, {
                    "name": "Ah Wei"
                  }, {
                    "name": "Ken Hung"
                  }]
                }, {
                  "name": "DJ small strong"
                }]
              }, {
                "name": "Timbaland"
              }]
            }, {
              "name": "Purple Tang chess",
              "children": [{
                "name": "Li Yun",
                "children": [{
                  "name": "Chaolian",
                  "children": [{
                    "name": "Ken Wu",
                    "children": [{
                      "name": "Lawrence Ho Kai"
                    }, {
                      "name": "Chen Zeshan"
                    }]
                  }, {
                    "name": "Ka Tina"
                  }, {
                    "name": "jw_amusic"
                  }]
                }, {
                  "name": "Poetry Ya"
                }, {
                  "name": "Jing"
                }]
              }, {
                "name": "Charlene",
                "children": [{
                  "name": "Gillian",
                  "children": [{
                    "name": "Qiao Zhenyu",
                    "children": [{
                      "name": "Ma Tianyu"
                    }, {
                      "name": "William Chan",
                      "children": [{
                        "name": "Mani"
                      }]
                    }, {
                      "name": "High Weiguang"
                    }]
                  }, {
                    "name": "Zhou Tang Hao"
                  }, {
                    "name": "Alien Huang"
                  }]
                }, {
                  "name": "Xie Na"
                }, {
                  "name": "Chim"
                }]
              }, {
                "name": "Shira",
                "children": [{
                  "name": "EXO-M"
                }, {
                  "name": "Moo."
                }]
              }]
            }, {
              "name": "Michelle Wai",
              "children": [{
                "name": "Sandra"
              }, {
                "name": "Matt Chow"
              }, {
                "name": "Sherman Chung"
              }]
            }, {
              "name": "Joey",
              "children": [{
                "name": "Tony"
              }, {
                "name": "Wyman"
              }]
            }, {
              "name": "Calvin",
              "children": [{
                "name": "Eason",
                "children": [{
                  "name": "Nicholas Tse",
                  "children": [{
                    "name": "Gui Lun Mei",
                    "children": [{
                      "name": "Shu Qi"
                    }, {
                      "name": "Mei"
                    }, {
                      "name": "Stefanie"
                    }]
                  }, {
                    "name": "Lindane"
                  }, {
                    "name": "Yundi Li"
                  }]
                }, {
                  "name": "Mavis"
                }, {
                  "name": "Zhang Bai",
                  "children": [{
                    "name": "Eddie",
                    "children": [{
                      "name": "Dante Lam"
                    }]
                  }, {
                    "name": "Wei Chen",
                    "children": [{
                      "name": "Qin Kai",
                      "children": [{
                        "name": "Sun Yang",
                        "children": [{
                          "name": "Jacky Cheung"
                        }, {
                          "name": "Chinese Shao"
                        }]
                      }, {
                        "name": "Wu Min Xia"
                      }, {
                        "name": "Chen Yibing"
                      }]
                    }]
                  }, {
                    "name": "Zhang Jiajia"
                  }]
                }]
              }, {
                "name": "Eric Kot"
              }, {
                "name": "Ekin Cheng",
                "children": [{
                  "name": "Jordan Chan"
                }, {
                  "name": "Michael Tse"
                }]
              }]
            }, {
              "name": "JJ",
              "children": [{
                "name": "Lee Hom"
              }, {
                "name": "Jolin"
              }]
            }, {
              "name": "Xu Zheng",
              "children": [{
                "name": "Jet Li"
              }, {
                "name": "Han"
              }, {
                "name": "Zhao Wei"
              }]
            }, {
              "name": "Liu follow Zimo",
              "children": [{
                "name": "Qian Xue"
              }, {
                "name": "Yang Shanshan"
              }]
            }, {
              "name": "Wang Zijian",
              "children": [{
                "name": "Zheng Kai"
              }, {
                "name": "Liu Jiang"
              }, {
                "name": "Tao"
              }]
            }, {
              "name": "Luo Zhen ring",
              "children": [{
                "name": "Zou Kai",
                "children": [{
                  "name": "Xu Song"
                }, {
                  "name": "Zhang Chenglong"
                }, {
                  "name": "Zou Shiming"
                }]
              }, {
                "name": "Ju snow",
                "children": [{
                  "name": "Yu Jingxi",
                  "children": [{
                    "name": "Zhangxiang Ling",
                    "children": [{
                      "name": "PLU millet"
                    }, {
                      "name": "Highland level"
                    }]
                  }, {
                    "name": "Dai Shi",
                    "children": [{
                      "name": "Yang Fengzhi"
                    }, {
                      "name": "Li Xin"
                    }, {
                      "name": "The Lu Wei",
                      "children": [{
                        "name": "Sun Yalong"
                      }, {
                        "name": "Shen Qu map"
                      }, {
                        "name": "Zhu rights"
                      }]
                    }]
                  }, {
                    "name": "Pei Yue",
                    "children": [{
                      "name": "Shen Weirong",
                      "children": [{
                        "name": "Jin Yibo"
                      }, {
                        "name": "Bian Zhengwei"
                      }]
                    }, {
                      "name": "LI"
                    }]
                  }]
                }, {
                  "name": "Kong Lianshun",
                  "children": [{
                    "name": "old wet",
                    "children": [{
                      "name": "Extreme Jade"
                    }, {
                      "name": "Ma"
                    }, {
                      "name": "Yan potato avi"
                    }]
                  }, {
                    "name": "Little Love"
                  }, {
                    "name": "Ma Poetry",
                    "children": [{
                      "name": "Zhang Yu"
                    }]
                  }]
                }, {
                  "name": "Sun Bowen",
                  "children": [{
                    "name": "Chen Jian book"
                  }, {
                    "name": "Chen Qidong"
                  }, {
                    "name": "Teng Lin Ji"
                  }]
                }]
              }, {
                "name": "Chen Jianhong",
                "children": [{
                  "name": "Yi",
                  "children": [{
                    "name": "Aaron"
                  }, {
                    "name": "Sandrine Pinna"
                  }, {
                    "name": "Liu Xiping"
                  }]
                }, {
                  "name": "Peter Ho",
                  "children": [{
                    "name": "Yu Yongfu",
                    "children": [{
                      "name": "Chao"
                    }, {
                      "name": "Yu Chengdong"
                    }, {
                      "name": "Jin Chi",
                      "children": [{
                        "name": "Gary"
                      }, {
                        "name": "Weixue Man"
                      }, {
                        "name": "Zeng Yiming"
                      }]
                    }]
                  }, {
                    "name": "Dylan Kuo"
                  }, {
                    "name": "Wallace"
                  }]
                }, {
                  "name": "Jang Keun Suk"
                }]
              }]
            }, {
              "name": "Tu Song Yan",
              "children": [{
                "name": "Haiqing"
              }, {
                "name": "Zhang Yi Yun"
              }, {
                "name": "Wang Yuan may"
              }]
            }, {
              "name": "Gordon Chan",
              "children": [{
                "name": "package Bell",
                "children": [{
                  "name": "Chen He"
                }, {
                  "name": "Yang Shan"
                }]
              }]
            }, {
              "name": "stay a few hands",
              "children": [{
                "name": "Xiahe"
              }, {
                "name": "Lu Qi",
                "children": [{
                  "name": "Bei Zhicheng"
                }, {
                  "name": "Sun Jie"
                }]
              }, {
                "name": "Zhang Xin Yuan",
                "children": [{
                  "name": "Huang Xuan"
                }, {
                  "name": "Yuki Furukawa"
                }, {
                  "name": "Jiang Jinfu"
                }]
              }]
            }, {
              "name": "Yumiko",
              "children": [{
                "name": "Leo",
                "children": [{
                  "name": "Cui origin",
                  "children": [{
                    "name": "Pu Zhengzhu"
                  }, {
                    "name": "Kim Hee Chul"
                  }]
                }, {
                  "name": "Dayo"
                }]
              }]
            }, {
              "name": "Ning Hao",
              "children": [{
                "name": "Xu Zheng"
              }, {
                "name": "Huang Bo"
              }, {
                "name": "Ray good news"
              }]
            }, {
              "name": "Niu Ze",
              "children": [{
                "name": "Chen meaning",
                "children": [{
                  "name": "Zhang Jun Ning"
                }, {
                  "name": "Chen Bo Lin,",
                  "children": [{
                    "name": "Feng Shao Feng"
                  }, {
                    "name": "High Huayang",
                    "children": [{
                      "name": "Crowding"
                    }, {
                      "name": "Li Donglin"
                    }, {
                      "name": "Summer Green"
                    }]
                  }]
                }, {
                  "name": "Ji Jin Hee"
                }]
              }, {
                "name": "Ethan"
              }]
            }, {
              "name": "Zhou Xianyang",
              "children": [{
                "name": "Wang Luo Dan"
              }, {
                "name": "Well Bo Ran"
              }, {
                "name": "Zhang Jin"
              }]
            }, {
              "name": "Dee",
              "children": [{
                "name": "Kevin Tsai"
              }]
            }, {
              "name": "Liu Wei",
              "children": [{
                "name": "Yangqi Yu",
                "children": [{
                  "name": "Eric"
                }, {
                  "name": "Zhang Aija",
                  "children": [{
                    "name": "Serena Fang"
                  }]
                }]
              }, {
                "name": "Raymond"
              }]
            }, {
              "name": "Zhou Tang Hao",
              "children": [{
                "name": "Owodog",
                "children": [{
                  "name": "Luo"
                }, {
                  "name": "Jane Kaile"
                }]
              }, {
                "name": "Lin Wei Heng"
              }, {
                "name": "Wang Xuee",
                "children": [{
                  "name": "Hong Wei Ning"
                }]
              }]
            }, {
              "name": "Ying Yang",
              "children": [{
                "name": "Ni-ni"
              }]
            }, {
              "name": "Dong Zijian",
              "children": [{
                "name": "Guo Jingfei",
                "children": [{
                  "name": "Anita"
                }, {
                  "name": "Qian Fang"
                }]
              }, {
                "name": "Lu Yi"
              }, {
                "name": "Kwan"
              }]
            }]
          }
          ]
        }
      ]
    });

  }
}
// var option;
// const chartDom = document.getElementById('main')!;
// var myChart = echarts.init(chartDom);
// $.get('https://echarts.apache.org/examples/data/asset/data/flare.json', function (data: any) {

//   data.children.forEach(function (
//     datum: { collapsed: boolean },
//     index: number
//   ) {
//     index % 2 === 0 && (datum.collapsed = true);
//   });

//   option = {
//     tooltip: {
//       trigger: 'item',
//       triggerOn: 'mousemove'
//     },
//     series: [
//       {
//         type: 'tree',

//         data: [data],

//         top: '1%',
//         left: '7%',
//         bottom: '1%',
//         right: '20%',

//         symbolSize: 7,

//         label: {
//           position: 'left',
//           verticalAlign: 'middle',
//           align: 'right',
//           fontSize: 9
//         },

//         leaves: {
//           label: {
//             position: 'right',
//             verticalAlign: 'middle',
//             align: 'left'
//           }
//         },

//         emphasis: {
//           focus: 'descendant'
//         },

//         expandAndCollapse: true,
//         animationDuration: 550,
//         animationDurationUpdate: 750
//       }
//     ]
//   };
//   option && myChart.setOption(option)
//   console.log(option)
// });