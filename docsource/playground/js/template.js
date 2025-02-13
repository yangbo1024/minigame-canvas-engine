export default
`
<view class="container" id="main">
  <view class="header">
    <bitmaptext font="fnt_number-export" class="title" value="等级"></bitmaptext>
  </view>
  <view class="rankList">
        <scrollview class="list" scrollY="true">
            {{~it.data :item:index}}
                {{? index % 2 === 1 }}
                <view class="listItem listItemOld">
                {{?}}
                {{? index % 2 === 0 }}
                <view class="listItem">
                {{?}}
                    <bitmaptext font="fnt_number-export" class="listItemNum" value="{{= index + 1}}"></bitmaptext>
                    <image class="listHeadImg" src="{{= item.avatarUrl }}"></image>
                  <text class="listItemName" value="{{= item.nickname}}"></text>
                  <text class="listItemScore" value="{{= item.rankScore}}"></text>
                  <text class="listScoreUnit" value="分"></text>
                </view>
            {{~}}
        </scrollview>
        <text class="listTips" value="仅展示前50位好友排名"></text>

        <view class="listItem selfListItem">
            <bitmaptext font="fnt_number-export" class="listItemNum" value="{{= it.selfIndex}}"></bitmaptext>
            <image class="listHeadImg" src="{{= it.self.avatarUrl }}"></image>
            <text class="listItemName" value="{{= it.self.nickname}}"></text>
            <text class="listItemScore" value="{{= item.rankScore}}"></text>
            <text class="listScoreUnit" value="分"></text>
        </view>
    </view>
</view>
`
