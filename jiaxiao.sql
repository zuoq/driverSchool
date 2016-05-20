/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : jiaxiao

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-05-20 23:07:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` text CHARACTER SET utf8 NOT NULL,
  `answer1` text CHARACTER SET utf8 NOT NULL,
  `answer2` text CHARACTER SET utf8 NOT NULL,
  `answer3` text CHARACTER SET utf8,
  `answer4` text CHARACTER SET utf8,
  `right` text CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of questions
-- ----------------------------
INSERT INTO `questions` VALUES ('1', '冰雪道路行车，由于积雪对光线的反射，极易造成驾驶人目眩而产生错觉', '正确', '错误', '', '', '1');
INSERT INTO `questions` VALUES ('2', '  驾驶机动车在道路上超车完毕驶回原车道时开启右转向灯。', '正确', '错误', '', '', '1');
INSERT INTO `questions` VALUES ('3', '  车辆不得在高速公路匝道上倒车。', '正确', '错误', '', '', '1');
INSERT INTO `questions` VALUES ('4', ' 救火时不要脱去所穿的化纤服装，以免伤害暴露的皮肤。', '正确', '错误', null, null, '2');
INSERT INTO `questions` VALUES ('5', '机动车驶近坡道顶端等影响安全视距的路段时，要如何保证安全？', '快速通过', '使用危险报警闪光灯', '减速慢行并鸣喇叭示意', '随意通行', '3');
INSERT INTO `questions` VALUES ('6', '驾驶机动车在距离隧道前多少米内不得停车？', '30米', '50米', '80米', '100米', '2');
INSERT INTO `questions` VALUES ('7', '机动车从高速公路加速车道汇入行车道车流时，以下做法正确的是什么？', '从正常行驶车辆后驶入行车道', '从正常行驶车辆前驶入行车道', '停车等待正常行驶车辆通过', '加速直接驶入行车道', '1');
INSERT INTO `questions` VALUES ('8', '下长坡控制车速最安全的方法是什么？', '挂入空挡滑行', '踏下离合器滑行', '利用发动机制动', '持续踏制动踏板', '3');
INSERT INTO `questions` VALUES ('9', '在泥泞路段遇车后轮向右侧滑时如何处置？', '继续加速', '向右转向', '向左转向', '紧急制动', '2');
INSERT INTO `questions` VALUES ('10', '  贾某驾车在高速公路上行驶，遇到大雾，能见度小于50米，贾某开启了雾灯、示廓灯、危险警报灯，以时速40公里行驶，并与同车道保持50米距离，经过三个出口驶离高速公路。贾某的主要违法行为是什么？', '未按规定开启相应的灯光', '超速行驶', '与同车道前车距离不足', '未及时从最近的出口驶离高速公路', '1,2,4');
