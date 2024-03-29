# syscli

## System Information View and Search

![Preview](https://github.com/aykutkardas/syscli/blob/master/syscli-preview.gif?raw=true)


### Install
```sh
npm install syscli -g
```

### Help
```
Options:
  -V, --version          output the version number
  -g, --get [type]       Fetch selected type of information
  -p, --pid [processId]  Get process by id
  -a, --all              Get all process
  -l, --limit [length]   Limited Data
  -s, --search [key]     Search in Process List
  -h, --help             output usage information
```
## All Process

### All Process and Limit Usage
```
syscli --get process --all --limit 3
# or
syscli -g process -a -l 3
```

### Output
```
syscli System Information View and Search

Showing 3 out of 227 results.

+-----+---------------------+----------+---------------------+
| Pid | Name                | Priority | Started             |
| 0   | System Idle Process | 0        | 2019-06-08 23:59:45 |
| 4   | System              | 8        | 2019-06-08 23:59:45 |
| 96  | Registry            | 8        | 2019-06-08 23:59:42 |
+-----+---------------------+----------+---------------------+
```
___
## Search

### Search Process And Limit Usage

```
syscli --get process --search node --limit 3
# or
syscli -g process -s node -l 3
```

### Output
```
syscli System Information View and Search

Showing 3 out of 12 results.

+-------+----------+----------+---------------------+
| Pid   | Name     | Priority | Started             |
| 38480 | node.exe | 8        | 2019-06-10 20:23:21 |
| 37600 | node.exe | 8        | 2019-06-10 20:23:27 |
| 6788  | Code.exe | 8        | 2019-06-10 21:10:22 |
+-------+----------+----------+---------------------+
```

___

## Get Process By Id

### Usage
```
syscli --get process --pid 38480
# or
syscli -g process -p 38480
```

### Output
```
syscli System Information View and Search

+-------+----------+----------+---------------------+
| Pid   | Name     | Priority | Started             |
| 38480 | node.exe | 8        | 2019-06-10 20:23:21 |
+-------+----------+----------+---------------------+
```

## ***More features coming soon***