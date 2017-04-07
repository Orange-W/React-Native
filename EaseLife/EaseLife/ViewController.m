//
//  ViewController.m
//  EaseLife
//
//  Created by Orange-W on 2017/3/23.
//  Copyright © 2017年 mredrockxxxxss. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>


@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    UIButton *btn = [[UIButton alloc] initWithFrame:CGRectMake(20, 20, 100, 50)];
    [btn setTitle:@"click" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(click) forControlEvents:UIControlEventTouchUpInside];
    btn.backgroundColor = [UIColor redColor];
    [self.view addSubview:btn];
    [self click];
}

- (void)click{
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/Interface/index.ios.bundle?platform=ios"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"RNHighScores"
                         initialProperties :
     @{
       @"scores" : @[
               @{
                   @"name" : @"Alex",
                   @"value": @"42"
                   },
               @{
                   @"name" : @"Joel",
                   @"value": @"10"
                   }
               ]
       }
                          launchOptions    : nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}

@end
