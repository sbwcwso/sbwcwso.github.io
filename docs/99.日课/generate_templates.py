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
dates = list()
target_paths = list()
target_files = list()

now = datetime.datetime.now()
dates.append(now)
dates.append(now + datetime.timedelta(days=1))

for date in dates:
  year, month, day = str(date.year), str(
      date.month).zfill(2), str(date.day).zfill(2)
  target_paths.append(os.path.join(current_path, year+"." +
                      year+"年", month+"."+month+"月"))
  file_name = "{day}.{day}日.md".format(day=day)
  target_files.append(os.path.join(target_paths[-1], file_name))

for target_path in target_paths:
  if not os.path.isdir(target_path):
    os.makedirs(target_path)
    break

for target_file, date in zip(target_files, dates):
  if not os.path.isfile(target_file):
    with open(template_file, "r", encoding='utf8') as source, open(target_file, "w") as dest:
      week_day = week_dict[date.weekday()]
      lines = source.readlines()
      lines.insert(8, "# {}年{}月{}日 {}\n".format(
          date.year, date.month, date.day, week_day))
      lines.insert(10, "## {}\n".format(week_day))
      dest.writelines(lines)
    break
