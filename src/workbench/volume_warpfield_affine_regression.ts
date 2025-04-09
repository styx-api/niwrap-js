// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_WARPFIELD_AFFINE_REGRESSION_METADATA: Metadata = {
    id: "d0e758c1c3b93d5f135a70ee0789b84e5479108f.boutiques",
    name: "volume-warpfield-affine-regression",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeWarpfieldAffineRegressionFlirtOutParameters {
    "__STYXTYPE__": "flirt_out";
    "source_volume": string;
    "target_volume": string;
}


interface VolumeWarpfieldAffineRegressionParameters {
    "__STYXTYPE__": "volume-warpfield-affine-regression";
    "warpfield": string;
    "affine_out": string;
    "opt_roi_roi_vol"?: InputPathType | null | undefined;
    "opt_fnirt_source_volume"?: string | null | undefined;
    "flirt_out"?: VolumeWarpfieldAffineRegressionFlirtOutParameters | null | undefined;
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
        "volume-warpfield-affine-regression": volume_warpfield_affine_regression_cargs,
        "flirt_out": volume_warpfield_affine_regression_flirt_out_cargs,
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
    };
    return outputsFuncs[t];
}


function volume_warpfield_affine_regression_flirt_out_params(
    source_volume: string,
    target_volume: string,
): VolumeWarpfieldAffineRegressionFlirtOutParameters {
    /**
     * Build parameters.
    
     * @param source_volume the volume you want to apply the transform to
     * @param target_volume the target space you want the transformed volume to match
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "flirt_out" as const,
        "source_volume": source_volume,
        "target_volume": target_volume,
    };
    return params;
}


function volume_warpfield_affine_regression_flirt_out_cargs(
    params: VolumeWarpfieldAffineRegressionFlirtOutParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-flirt-out");
    cargs.push((params["source_volume"] ?? null));
    cargs.push((params["target_volume"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `volume_warpfield_affine_regression(...)`.
 *
 * @interface
 */
interface VolumeWarpfieldAffineRegressionOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function volume_warpfield_affine_regression_params(
    warpfield: string,
    affine_out: string,
    opt_roi_roi_vol: InputPathType | null = null,
    opt_fnirt_source_volume: string | null = null,
    flirt_out: VolumeWarpfieldAffineRegressionFlirtOutParameters | null = null,
): VolumeWarpfieldAffineRegressionParameters {
    /**
     * Build parameters.
    
     * @param warpfield the input warpfield
     * @param affine_out output - the output affine file
     * @param opt_roi_roi_vol only consider voxels within a mask (e.g., a brain mask): the mask volume
     * @param opt_fnirt_source_volume input is a fnirt warpfield: the source volume used when generating the fnirt warpfield
     * @param flirt_out write output as a flirt matrix rather than a world coordinate transform
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-warpfield-affine-regression" as const,
        "warpfield": warpfield,
        "affine_out": affine_out,
    };
    if (opt_roi_roi_vol !== null) {
        params["opt_roi_roi_vol"] = opt_roi_roi_vol;
    }
    if (opt_fnirt_source_volume !== null) {
        params["opt_fnirt_source_volume"] = opt_fnirt_source_volume;
    }
    if (flirt_out !== null) {
        params["flirt_out"] = flirt_out;
    }
    return params;
}


function volume_warpfield_affine_regression_cargs(
    params: VolumeWarpfieldAffineRegressionParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-volume-warpfield-affine-regression");
    cargs.push((params["warpfield"] ?? null));
    cargs.push((params["affine_out"] ?? null));
    if ((params["opt_roi_roi_vol"] ?? null) !== null) {
        cargs.push(
            "-roi",
            execution.inputFile((params["opt_roi_roi_vol"] ?? null))
        );
    }
    if ((params["opt_fnirt_source_volume"] ?? null) !== null) {
        cargs.push(
            "-fnirt",
            (params["opt_fnirt_source_volume"] ?? null)
        );
    }
    if ((params["flirt_out"] ?? null) !== null) {
        cargs.push(...dynCargs((params["flirt_out"] ?? null).__STYXTYPE__)((params["flirt_out"] ?? null), execution));
    }
    return cargs;
}


function volume_warpfield_affine_regression_outputs(
    params: VolumeWarpfieldAffineRegressionParameters,
    execution: Execution,
): VolumeWarpfieldAffineRegressionOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeWarpfieldAffineRegressionOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function volume_warpfield_affine_regression_execute(
    params: VolumeWarpfieldAffineRegressionParameters,
    execution: Execution,
): VolumeWarpfieldAffineRegressionOutputs {
    /**
     * Regress affine from warpfield.
     * 
     * For all voxels in the warpfield, do a regression that predicts the post-warp coordinate from the source coordinate.  When -roi is specified, only consider voxels with a value greater than 0 in <roi-vol>.
     * 
     * The default is to expect the warpfield to be in relative world coordinates (mm space), and to write the output as a world affine (mm space to mm space).  If you are using FSL-created files and utilities, specify -fnirt and -flirt as needed, as their coordinate conventions are different.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VolumeWarpfieldAffineRegressionOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_warpfield_affine_regression_cargs(params, execution)
    const ret = volume_warpfield_affine_regression_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_warpfield_affine_regression(
    warpfield: string,
    affine_out: string,
    opt_roi_roi_vol: InputPathType | null = null,
    opt_fnirt_source_volume: string | null = null,
    flirt_out: VolumeWarpfieldAffineRegressionFlirtOutParameters | null = null,
    runner: Runner | null = null,
): VolumeWarpfieldAffineRegressionOutputs {
    /**
     * Regress affine from warpfield.
     * 
     * For all voxels in the warpfield, do a regression that predicts the post-warp coordinate from the source coordinate.  When -roi is specified, only consider voxels with a value greater than 0 in <roi-vol>.
     * 
     * The default is to expect the warpfield to be in relative world coordinates (mm space), and to write the output as a world affine (mm space to mm space).  If you are using FSL-created files and utilities, specify -fnirt and -flirt as needed, as their coordinate conventions are different.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param warpfield the input warpfield
     * @param affine_out output - the output affine file
     * @param opt_roi_roi_vol only consider voxels within a mask (e.g., a brain mask): the mask volume
     * @param opt_fnirt_source_volume input is a fnirt warpfield: the source volume used when generating the fnirt warpfield
     * @param flirt_out write output as a flirt matrix rather than a world coordinate transform
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeWarpfieldAffineRegressionOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_WARPFIELD_AFFINE_REGRESSION_METADATA);
    const params = volume_warpfield_affine_regression_params(warpfield, affine_out, opt_roi_roi_vol, opt_fnirt_source_volume, flirt_out)
    return volume_warpfield_affine_regression_execute(params, execution);
}


export {
      VOLUME_WARPFIELD_AFFINE_REGRESSION_METADATA,
      VolumeWarpfieldAffineRegressionFlirtOutParameters,
      VolumeWarpfieldAffineRegressionOutputs,
      VolumeWarpfieldAffineRegressionParameters,
      volume_warpfield_affine_regression,
      volume_warpfield_affine_regression_flirt_out_params,
      volume_warpfield_affine_regression_params,
};
