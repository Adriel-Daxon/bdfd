import { documentation, YouTubeChannelBase } from './youtube-base.js'

export default class YouTubeChannelViews extends YouTubeChannelBase {
  static route = {
    base: 'youtube/channel/views',
    pattern: ':channelId',
  }

  static get examples() {
    const preview = this.render({
      statistics: { viewCount: 30543 },
      id: 'UC8butISFwT-Wl7EV0hUK0BQ',
    })
    // link[] is not allowed in examples
    delete preview.link
    return [
      {
        title: 'YouTube Channel Views',
        namedParams: { channelId: 'UC8butISFwT-Wl7EV0hUK0BQ' },
        staticPreview: preview,
        documentation,
      },
    ]
  }

  static render({ statistics, id }) {
    return super.renderSingleStat({ statistics, statisticName: 'view', id })
  }
}
