//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


Iphone = function(args) {
  this.name = null;
  if (args) {
    if (args.name !== undefined) {
      this.name = args.name;
    }
  }
};
Iphone.prototype = {};
Iphone.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Iphone.prototype.write = function(output) {
  output.writeStructBegin('Iphone');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Android = function(args) {
  this.name = null;
  if (args) {
    if (args.name !== undefined) {
      this.name = args.name;
    }
  }
};
Android.prototype = {};
Android.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Android.prototype.write = function(output) {
  output.writeStructBegin('Android');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Phone = function(args) {
  this.iphone = null;
  this.android = null;
  if (args) {
    if (args.iphone !== undefined) {
      this.iphone = args.iphone;
    }
    if (args.android !== undefined) {
      this.android = args.android;
    }
  }
};
Phone.prototype = {};
Phone.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.iphone = new Iphone();
        this.iphone.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.android = new Android();
        this.android.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Phone.prototype.write = function(output) {
  output.writeStructBegin('Phone');
  if (this.iphone !== null && this.iphone !== undefined) {
    output.writeFieldBegin('iphone', Thrift.Type.STRUCT, 1);
    this.iphone.write(output);
    output.writeFieldEnd();
  }
  if (this.android !== null && this.android !== undefined) {
    output.writeFieldBegin('android', Thrift.Type.STRUCT, 2);
    this.android.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SampleRequest = function(args) {
  this.argument = null;
  this.phone = null;
  if (args) {
    if (args.argument !== undefined) {
      this.argument = args.argument;
    }
    if (args.phone !== undefined) {
      this.phone = args.phone;
    }
  }
};
SampleRequest.prototype = {};
SampleRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.argument = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.phone = new Phone();
        this.phone.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SampleRequest.prototype.write = function(output) {
  output.writeStructBegin('SampleRequest');
  if (this.argument !== null && this.argument !== undefined) {
    output.writeFieldBegin('argument', Thrift.Type.STRING, 1);
    output.writeString(this.argument);
    output.writeFieldEnd();
  }
  if (this.phone !== null && this.phone !== undefined) {
    output.writeFieldBegin('phone', Thrift.Type.STRUCT, 2);
    this.phone.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SampleResponse = function(args) {
  this.message = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
SampleResponse.prototype = {};
SampleResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SampleResponse.prototype.write = function(output) {
  output.writeStructBegin('SampleResponse');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

