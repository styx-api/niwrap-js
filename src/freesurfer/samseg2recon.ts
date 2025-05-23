// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SAMSEG2RECON_METADATA: Metadata = {
    id: "97f76cfe683f565bad32807ad5fd88ea96f398c8.boutiques",
    name: "samseg2recon",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Samseg2reconParameters {
    "__STYXTYPE__": "samseg2recon";
    "subject": string;
    "samseg_dir"?: string | null | undefined;
    "no_cc": boolean;
    "fill": boolean;
    "normalization2": boolean;
    "uchar": boolean;
    "no_keep_exc": boolean;
    "long_tp"?: number | null | undefined;
    "base": boolean;
    "mask_file"?: InputPathType | null | undefined;
    "from_recon_all": boolean;
    "force_update": boolean;
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
        "samseg2recon": samseg2recon_cargs,
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
        "samseg2recon": samseg2recon_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `samseg2recon(...)`.
 *
 * @interface
 */
interface Samseg2reconOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Filled MRI volume for the subject, if --fill is used.
     */
    filled_mgz: OutputPathType;
    /**
     * Normalized MRI volume created from brain.mgz if --normalization2 is used.
     */
    norm_mgz: OutputPathType;
    /**
     * Original MRI conformed volume.
     */
    orig_mgz: OutputPathType;
}


function samseg2recon_params(
    subject: string,
    samseg_dir: string | null = null,
    no_cc: boolean = false,
    fill: boolean = false,
    normalization2: boolean = false,
    uchar: boolean = false,
    no_keep_exc: boolean = false,
    long_tp: number | null = null,
    base: boolean = false,
    mask_file: InputPathType | null = null,
    from_recon_all: boolean = false,
    force_update: boolean = false,
): Samseg2reconParameters {
    /**
     * Build parameters.
    
     * @param subject Subject identifier
     * @param samseg_dir Output directory from samseg or samseg-long. Defaults to subject/mri/samseg if not supplied
     * @param no_cc Do not do corpus callosum segmentation
     * @param fill Use samseg to create the filled.mgz used for tessellation
     * @param normalization2 Seg brain.mgz to norm.mgz
     * @param uchar Convert to uchar
     * @param no_keep_exc Do not keep extracerebral segmentations
     * @param long_tp Process specific time point (TP) number from samsegdir
     * @param base Process base, will find folder called base in samsegdir
     * @param mask_file Use provided mask as brainmask instead of computing from seg
     * @param from_recon_all Indicates execution from recon-all, preventing overwrite of rawavg.mgz and orig.mgz
     * @param force_update Force update of the subject directory
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "samseg2recon" as const,
        "subject": subject,
        "no_cc": no_cc,
        "fill": fill,
        "normalization2": normalization2,
        "uchar": uchar,
        "no_keep_exc": no_keep_exc,
        "base": base,
        "from_recon_all": from_recon_all,
        "force_update": force_update,
    };
    if (samseg_dir !== null) {
        params["samseg_dir"] = samseg_dir;
    }
    if (long_tp !== null) {
        params["long_tp"] = long_tp;
    }
    if (mask_file !== null) {
        params["mask_file"] = mask_file;
    }
    return params;
}


function samseg2recon_cargs(
    params: Samseg2reconParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("samseg2recon");
    cargs.push(
        "--s",
        (params["subject"] ?? null)
    );
    if ((params["samseg_dir"] ?? null) !== null) {
        cargs.push(
            "--samseg",
            (params["samseg_dir"] ?? null)
        );
    }
    if ((params["no_cc"] ?? null)) {
        cargs.push("--no-cc");
    }
    if ((params["fill"] ?? null)) {
        cargs.push("--fill");
    }
    if ((params["normalization2"] ?? null)) {
        cargs.push("--normalization2");
    }
    if ((params["uchar"] ?? null)) {
        cargs.push("--uchar");
    }
    if ((params["no_keep_exc"] ?? null)) {
        cargs.push("--no-keep-exc");
    }
    if ((params["long_tp"] ?? null) !== null) {
        cargs.push(
            "--long",
            String((params["long_tp"] ?? null))
        );
    }
    if ((params["base"] ?? null)) {
        cargs.push("--base");
    }
    if ((params["mask_file"] ?? null) !== null) {
        cargs.push(
            "--m",
            execution.inputFile((params["mask_file"] ?? null))
        );
    }
    if ((params["from_recon_all"] ?? null)) {
        cargs.push("--from-recon-all");
    }
    if ((params["force_update"] ?? null)) {
        cargs.push("--force-update");
    }
    return cargs;
}


function samseg2recon_outputs(
    params: Samseg2reconParameters,
    execution: Execution,
): Samseg2reconOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Samseg2reconOutputs = {
        root: execution.outputFile("."),
        filled_mgz: execution.outputFile([(params["subject"] ?? null), "/mri/filled.mgz"].join('')),
        norm_mgz: execution.outputFile([(params["subject"] ?? null), "/mri/norm.mgz"].join('')),
        orig_mgz: execution.outputFile([(params["subject"] ?? null), "/mri/orig/001.mgz"].join('')),
    };
    return ret;
}


function samseg2recon_execute(
    params: Samseg2reconParameters,
    execution: Execution,
): Samseg2reconOutputs {
    /**
     * Creates and populates a subjects directory for use with recon-all from SAMSEG outputs.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Samseg2reconOutputs`).
     */
    params = execution.params(params)
    const cargs = samseg2recon_cargs(params, execution)
    const ret = samseg2recon_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function samseg2recon(
    subject: string,
    samseg_dir: string | null = null,
    no_cc: boolean = false,
    fill: boolean = false,
    normalization2: boolean = false,
    uchar: boolean = false,
    no_keep_exc: boolean = false,
    long_tp: number | null = null,
    base: boolean = false,
    mask_file: InputPathType | null = null,
    from_recon_all: boolean = false,
    force_update: boolean = false,
    runner: Runner | null = null,
): Samseg2reconOutputs {
    /**
     * Creates and populates a subjects directory for use with recon-all from SAMSEG outputs.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject Subject identifier
     * @param samseg_dir Output directory from samseg or samseg-long. Defaults to subject/mri/samseg if not supplied
     * @param no_cc Do not do corpus callosum segmentation
     * @param fill Use samseg to create the filled.mgz used for tessellation
     * @param normalization2 Seg brain.mgz to norm.mgz
     * @param uchar Convert to uchar
     * @param no_keep_exc Do not keep extracerebral segmentations
     * @param long_tp Process specific time point (TP) number from samsegdir
     * @param base Process base, will find folder called base in samsegdir
     * @param mask_file Use provided mask as brainmask instead of computing from seg
     * @param from_recon_all Indicates execution from recon-all, preventing overwrite of rawavg.mgz and orig.mgz
     * @param force_update Force update of the subject directory
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Samseg2reconOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SAMSEG2RECON_METADATA);
    const params = samseg2recon_params(subject, samseg_dir, no_cc, fill, normalization2, uchar, no_keep_exc, long_tp, base, mask_file, from_recon_all, force_update)
    return samseg2recon_execute(params, execution);
}


export {
      SAMSEG2RECON_METADATA,
      Samseg2reconOutputs,
      Samseg2reconParameters,
      samseg2recon,
      samseg2recon_params,
};
