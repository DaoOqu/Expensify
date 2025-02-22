import React from 'react';
import BlockingView from '@components/BlockingViews/BlockingView';
import Button from '@components/Button';
import FixedFooter from '@components/FixedFooter';
import HeaderWithBackButton from '@components/HeaderWithBackButton';
import * as Illustrations from '@components/Icon/Illustrations';
import ScreenWrapper from '@components/ScreenWrapper';
import useLocalize from '@hooks/useLocalize';
import Navigation from '@libs/Navigation/Navigation';
import styles from '@styles/styles';
import variables from '@styles/variables';
import ROUTES from '@src/ROUTES';

const propTypes = {};

const defaultProps = {};

function ImTeacherUpdateEmailPage() {
    const {translate} = useLocalize();

    return (
        <ScreenWrapper testID={ImTeacherUpdateEmailPage.displayName}>
            <HeaderWithBackButton
                title={translate('teachersUnitePage.iAmATeacher')}
                onBackButtonPress={() => Navigation.goBack(ROUTES.TEACHERS_UNITE)}
            />
            <BlockingView
                shouldShowLink
                shouldEmbedLinkWithSubtitle
                icon={Illustrations.EmailAddress}
                title={translate('teachersUnitePage.updateYourEmail')}
                subtitle={translate('teachersUnitePage.schoolMailAsDefault')}
                linkKey="teachersUnitePage.contactMethods"
                onLinkPress={() => Navigation.navigate(ROUTES.SETTINGS_CONTACT_METHODS)}
                iconWidth={variables.signInLogoWidthLargeScreen}
                iconHeight={variables.lhnLogoWidth}
            />
            <FixedFooter style={[styles.flexGrow0]}>
                <Button
                    success
                    accessibilityLabel={translate('teachersUnitePage.updateEmail')}
                    text={translate('teachersUnitePage.updateEmail')}
                    onPress={() => Navigation.navigate(ROUTES.SETTINGS_CONTACT_METHODS)}
                />
            </FixedFooter>
        </ScreenWrapper>
    );
}

ImTeacherUpdateEmailPage.propTypes = propTypes;
ImTeacherUpdateEmailPage.defaultProps = defaultProps;
ImTeacherUpdateEmailPage.displayName = 'ImTeacherUpdateEmailPage';

export default ImTeacherUpdateEmailPage;
