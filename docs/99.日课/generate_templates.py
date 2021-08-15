#!/usr/bin/env python3


import os
import datetime

week_dict = {
    0: "星期一",
    1: "星期二",
    2: "星期三",
    3: "星期四",
    4: "星期五",
    5: "星期六",
    6: "星期日"
}

current_path = os.path.split(os.path.realpath(__file__))[0]
template_file = os.path.join(current_path, "templates")

date = datetime.datetime.now()
year, month, day = str(date.year), str(
    date.month).zfill(2), str(date.day).zfill(2)
week_day = week_dict[date.weekday()]
target_path = os.path.join(current_path, year+"." +
                           year+"年", month+"."+month+"月")

if not os.path.isdir(target_path):
    os.makedirs(target_path)

file_name = "{day}.{day}日.md".format(day=day)
target_file = os.path.join(target_path, file_name)

if not os.path.isfile(target_file):
    with open(template_file, "r", encoding='utf8') as source, open(target_file, "w") as dest:
        lines = source.readlines()
        lines.insert(8, "# {}年{}月{}日 {}\n".format(
            date.year, date.month, date.day, week_day))
        dest.writelines(lines)
