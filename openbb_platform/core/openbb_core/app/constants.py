"""Constants for the OpenBB Platform."""

import os
from pathlib import Path

try:
    home_path = os.environ["OPENBB_USER_DATA_DIRECTORY"]
except KeyError:
    home_path = Path.home()

# Testing
home_path = '/tmp'

HOME_DIRECTORY = Path.home()
OPENBB_DIRECTORY = Path(HOME_DIRECTORY, ".openbb_platform")
USER_SETTINGS_PATH = Path(OPENBB_DIRECTORY, "user_settings.json")
SYSTEM_SETTINGS_PATH = Path(OPENBB_DIRECTORY, "system_settings.json")
