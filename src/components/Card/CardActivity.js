import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Left, Right, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import YouTube from 'react-native-youtube';
import ProgressiveImage from '../../components/ProgressiveImage';
import * as colors from '../../constants/colors';

class CardActivity extends Component {
  constructor(props) {
    super(props);
    this.renderMain = this.renderMain.bind(this);
  }
  renderMain(data) {
    if (data.type === 'text') {
      return (
        <View style={{ padding: 10 }}>
          <Text
            style={{ color: '#464646', fontFamily: 'OpenSans', fontSize: 12, paddingBottom: 5 }}
          >
            I’m going to the premiere of Ghost in the Shell movie on friday.
            I have high expectations for entertaining, action-packed, candy-eye sci-fi.
            Yes, I haven’t watched the anime yet.
          </Text>
          {data.image &&
            <ProgressiveImage
              source={{ uri: 'https://i.ytimg.com/vi/C0_EkYWJGEw/maxresdefault.jpg' }}
              containerStyle={{
                height: 200,
                backgroundColor: colors.imageGrey,
              }}
              style={{ height: 200 }}
            />}
        </View>
      );
    }
    return (
      <View style={{ padding: 0 }}>
        <Text
          style={{
            color: '#464646',
            fontFamily: 'OpenSans',
            fontSize: 12,
            padding: 10,
            paddingBottom: 5,
          }}
        >
          I’m going to the premiere of Ghost in the Shell movie on friday.
          I have high expectations for entertaining, action-packed, candy-eye sci-fi.
          Yes, I haven’t watched the anime yet.
        </Text>
        <YouTube
          ref={(component) => {
            this._youTubePlayer = component;
          }}
          videoId="KVZ-P-ZI6W4" // The YouTube video ID
          playlistId="PLF797E961509B4EB5" // A playlist's ID, overridden by `videoId`
          play={false} // control playback of video with true/false
          fullscreen={false} // control whether the video should play in fullscreen or inline
          loop={false} // control whether the video should loop when ended
          style={{
            alignSelf: 'stretch',
            height: 250,
            backgroundColor: 'black',
            marginVertical: 10,
          }}
        />
      </View>
    );
  }
  render() {
    const { props } = this;
    console.log(this.props);
    return (
      <View style={{ ...styles.container, ...props.style }}>
        <View style={{ padding: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Thumbnail
              style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
              source={require('../../assets/img/posters/fullmetal.jpg')}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  color: '#FF4027',
                  fontWeight: 'bold',
                  fontSize: 14,
                  fontFamily: 'OpenSans',
                }}
              >
                Rob
              </Text>
              <Text style={{ color: '#909090', fontSize: 11, fontFamily: 'OpenSans' }}>
                41 mins
              </Text>
            </View>
          </View>
        </View>
        {this.renderMain(props.data)}
        <View style={styles.footer}>
          <Left>
            <Button
              style={{ height: 35 }}
              transparent
              block
              onPress={() => this.props.onLeftPress()}
            >
              <Icon
                name="heart"
                style={{
                  color: props.liked ? colors.activeRed : '#A7A7A7',
                  width: 20,
                  fontSize: 14,
                }}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  fontFamily: 'OpenSans',
                  color: props.liked ? colors.activeRed : '#A7A7A7',
                }}
              >
                {props.liked ? 'Liked' : 'Like'}
              </Text>
            </Button>
          </Left>
          <View style={styles.footerDivider} />
          <Right>
            <Button
              style={{ height: 35 }}
              transparent
              block
              onPress={() => this.props.onRightPress()}
            >
              <Icon name="comment" style={{ color: '#A7A7A7', width: 20, fontSize: 14 }} />
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  fontFamily: 'OpenSans',
                  color: '#A7A7A7',
                }}
              >
                {props.rightText}
              </Text>
            </Button>
          </Right>
        </View>
      </View>
    );
  }
}

CardActivity.propTypes = {
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
};

CardActivity.defaultProps = {
  leftText: 'Like',
  rightText: 'Comment',
  children: {},
  style: {},
};

const styles = {
  container: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: 0,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    justifyContent: 'center',
    borderColor: '#EEEEEE',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 12,
    fontColor: '#333333',
    fontFamily: 'OpenSans',
  },
  footerDivider: {
    width: 0,
    height: '60%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#EEEEEE',
  },
};

export default CardActivity;