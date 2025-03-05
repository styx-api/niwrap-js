// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_AUTODET_GWSTATS_METADATA: Metadata = {
    id: "2408fc8252de26e31ffbcec5b0f37d3113618a46.boutiques",
    name: "mris_autodet_gwstats",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisAutodetGwstatsParameters {
    "__STYXTYPE__": "mris_autodet_gwstats";
    "output_file": string;
    "t1w_volume": InputPathType;
    "wm_volume": InputPathType;
    "surf": InputPathType;
    "lhsurf"?: InputPathType | null | undefined;
    "rhsurf"?: InputPathType | null | undefined;
    "subject": string;
    "subjects_dir": string;
    "min_border_white"?: number | null | undefined;
    "max_border_white"?: number | null | undefined;
    "min_gray_at_white_border"?: number | null | undefined;
    "max_gray"?: number | null | undefined;
    "max_gray_at_csf_border"?: number | null | undefined;
    "min_gray_at_csf_border"?: number | null | undefined;
    "max_csf"?: number | null | undefined;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "mris_autodet_gwstats": mris_autodet_gwstats_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "mris_autodet_gwstats": mris_autodet_gwstats_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_autodet_gwstats(...)`.
 *
 * @interface
 */
interface MrisAutodetGwstatsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output text file with gray/white statistics
     */
    output_file: OutputPathType;
}


function mris_autodet_gwstats_params(
    output_file: string,
    t1w_volume: InputPathType,
    wm_volume: InputPathType,
    surf: InputPathType,
    subject: string,
    subjects_dir: string,
    lhsurf: InputPathType | null = null,
    rhsurf: InputPathType | null = null,
    min_border_white: number | null = null,
    max_border_white: number | null = null,
    min_gray_at_white_border: number | null = null,
    max_gray: number | null = null,
    max_gray_at_csf_border: number | null = null,
    min_gray_at_csf_border: number | null = null,
    max_csf: number | null = null,
): MrisAutodetGwstatsParameters {
    /**
     * Build parameters.
    
     * @param output_file Output text file with stats
     * @param t1w_volume T1 weighted volume (usually brain.finalsurfs.mgz)
     * @param wm_volume White matter volume (usually wm.mgz)
     * @param surf Surface (usually ?h.orig)
     * @param subject Subject: reads in brain.finalsurfs.mgz, wm.mgz, lh.orig and rh.orig
     * @param subjects_dir SUBJECTS_DIR
     * @param lhsurf Left hemisphere surface
     * @param rhsurf Right hemisphere surface
     * @param min_border_white Minimum border white (MinBW)
     * @param max_border_white Maximum border white (MaxBW)
     * @param min_gray_at_white_border Minimum gray at white border (MinGWB)
     * @param max_gray Maximum gray (MaxG)
     * @param max_gray_at_csf_border Maximum gray at CSF border (MaxGCSFB)
     * @param min_gray_at_csf_border Minimum gray at CSF border (MinGCSFB)
     * @param max_csf Maximum CSF (MaxCSF)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_autodet_gwstats" as const,
        "output_file": output_file,
        "t1w_volume": t1w_volume,
        "wm_volume": wm_volume,
        "surf": surf,
        "subject": subject,
        "subjects_dir": subjects_dir,
    };
    if (lhsurf !== null) {
        params["lhsurf"] = lhsurf;
    }
    if (rhsurf !== null) {
        params["rhsurf"] = rhsurf;
    }
    if (min_border_white !== null) {
        params["min_border_white"] = min_border_white;
    }
    if (max_border_white !== null) {
        params["max_border_white"] = max_border_white;
    }
    if (min_gray_at_white_border !== null) {
        params["min_gray_at_white_border"] = min_gray_at_white_border;
    }
    if (max_gray !== null) {
        params["max_gray"] = max_gray;
    }
    if (max_gray_at_csf_border !== null) {
        params["max_gray_at_csf_border"] = max_gray_at_csf_border;
    }
    if (min_gray_at_csf_border !== null) {
        params["min_gray_at_csf_border"] = min_gray_at_csf_border;
    }
    if (max_csf !== null) {
        params["max_csf"] = max_csf;
    }
    return params;
}


function mris_autodet_gwstats_cargs(
    params: MrisAutodetGwstatsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_autodet_gwstats");
    cargs.push(
        "--o",
        (params["output_file"] ?? null)
    );
    cargs.push(
        "--i",
        execution.inputFile((params["t1w_volume"] ?? null))
    );
    cargs.push(
        "--wm",
        execution.inputFile((params["wm_volume"] ?? null))
    );
    cargs.push(
        "--surf",
        execution.inputFile((params["surf"] ?? null))
    );
    if ((params["lhsurf"] ?? null) !== null) {
        cargs.push(
            "--lh-surf",
            execution.inputFile((params["lhsurf"] ?? null))
        );
    }
    if ((params["rhsurf"] ?? null) !== null) {
        cargs.push(
            "--rh-surf",
            execution.inputFile((params["rhsurf"] ?? null))
        );
    }
    cargs.push(
        "--s",
        (params["subject"] ?? null)
    );
    cargs.push(
        "--sd",
        (params["subjects_dir"] ?? null)
    );
    if ((params["min_border_white"] ?? null) !== null) {
        cargs.push(
            "--min_border_white",
            String((params["min_border_white"] ?? null))
        );
    }
    if ((params["max_border_white"] ?? null) !== null) {
        cargs.push(
            "--max_border_white",
            String((params["max_border_white"] ?? null))
        );
    }
    if ((params["min_gray_at_white_border"] ?? null) !== null) {
        cargs.push(
            "--min_gray_at_white_border",
            String((params["min_gray_at_white_border"] ?? null))
        );
    }
    if ((params["max_gray"] ?? null) !== null) {
        cargs.push(
            "--max_gray",
            String((params["max_gray"] ?? null))
        );
    }
    if ((params["max_gray_at_csf_border"] ?? null) !== null) {
        cargs.push(
            "--max_gray_at_csf_border",
            String((params["max_gray_at_csf_border"] ?? null))
        );
    }
    if ((params["min_gray_at_csf_border"] ?? null) !== null) {
        cargs.push(
            "--min_gray_at_csf_border",
            String((params["min_gray_at_csf_border"] ?? null))
        );
    }
    if ((params["max_csf"] ?? null) !== null) {
        cargs.push(
            "--max_csf",
            String((params["max_csf"] ?? null))
        );
    }
    return cargs;
}


function mris_autodet_gwstats_outputs(
    params: MrisAutodetGwstatsParameters,
    execution: Execution,
): MrisAutodetGwstatsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisAutodetGwstatsOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function mris_autodet_gwstats_execute(
    params: MrisAutodetGwstatsParameters,
    execution: Execution,
): MrisAutodetGwstatsOutputs {
    /**
     * Manages the computation of the gray/white statistics used to place the white and pial surfaces.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisAutodetGwstatsOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_autodet_gwstats_cargs(params, execution)
    const ret = mris_autodet_gwstats_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_autodet_gwstats(
    output_file: string,
    t1w_volume: InputPathType,
    wm_volume: InputPathType,
    surf: InputPathType,
    subject: string,
    subjects_dir: string,
    lhsurf: InputPathType | null = null,
    rhsurf: InputPathType | null = null,
    min_border_white: number | null = null,
    max_border_white: number | null = null,
    min_gray_at_white_border: number | null = null,
    max_gray: number | null = null,
    max_gray_at_csf_border: number | null = null,
    min_gray_at_csf_border: number | null = null,
    max_csf: number | null = null,
    runner: Runner | null = null,
): MrisAutodetGwstatsOutputs {
    /**
     * Manages the computation of the gray/white statistics used to place the white and pial surfaces.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param output_file Output text file with stats
     * @param t1w_volume T1 weighted volume (usually brain.finalsurfs.mgz)
     * @param wm_volume White matter volume (usually wm.mgz)
     * @param surf Surface (usually ?h.orig)
     * @param subject Subject: reads in brain.finalsurfs.mgz, wm.mgz, lh.orig and rh.orig
     * @param subjects_dir SUBJECTS_DIR
     * @param lhsurf Left hemisphere surface
     * @param rhsurf Right hemisphere surface
     * @param min_border_white Minimum border white (MinBW)
     * @param max_border_white Maximum border white (MaxBW)
     * @param min_gray_at_white_border Minimum gray at white border (MinGWB)
     * @param max_gray Maximum gray (MaxG)
     * @param max_gray_at_csf_border Maximum gray at CSF border (MaxGCSFB)
     * @param min_gray_at_csf_border Minimum gray at CSF border (MinGCSFB)
     * @param max_csf Maximum CSF (MaxCSF)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisAutodetGwstatsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_AUTODET_GWSTATS_METADATA);
    const params = mris_autodet_gwstats_params(output_file, t1w_volume, wm_volume, surf, subject, subjects_dir, lhsurf, rhsurf, min_border_white, max_border_white, min_gray_at_white_border, max_gray, max_gray_at_csf_border, min_gray_at_csf_border, max_csf)
    return mris_autodet_gwstats_execute(params, execution);
}


export {
      MRIS_AUTODET_GWSTATS_METADATA,
      MrisAutodetGwstatsOutputs,
      MrisAutodetGwstatsParameters,
      mris_autodet_gwstats,
      mris_autodet_gwstats_params,
};
