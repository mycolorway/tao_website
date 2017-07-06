class Docs::CitiesController < ApplicationController

  def index
    load_cities

    respond_to do |format|
      format.json {
        @cities = @cities.select {|city|
          key = "#{city[:name]} #{city[:pinyin]}".downcase
          value = params[:name_cont].downcase
          key.include?(value)
        }
      }
    end
  end

  private

  def load_cities
    @cities = [
      {name: '成都', province: '四川', value: '0', pinyin: 'cd chengdu', hint: '家乡'},
      {name: '乐山', province: '四川', value: '1', pinyin: 'ls leshau'},
      {name: '绵阳', province: '四川', value: '2', pinyin: 'my mianyan'},
      {name: '德阳', province: '四川', value: '3', pinyin: 'dy deyang'},
      {name: '雅安', province: '四川', value: '4', pinyin: 'ya yaan'},
      {name: '西昌', province: '四川', value: '5', pinyin: 'xc xichang'},
      {name: '广州', province: '广东', value: '6', pinyin: 'gz guangzhou'},
      {name: '深圳', province: '广东', value: '7', pinyin: 'sz shenzhen'},
      {name: '佛山', province: '广东', value: '8', pinyin: 'fs foshan'},
      {name: '东莞', province: '广东', value: '9', pinyin: 'dg dongguan'}
    ]
  end

end
